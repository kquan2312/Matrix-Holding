import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

type Reaction = "like" | "dislike" | null;

interface ArticleComment {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

interface ArticleFeedback {
  reaction: Reaction;
  comments: ArticleComment[];
}

const storageKey = "matrix-news-feedback";
const emptyFeedback: ArticleFeedback = { reaction: null, comments: [] };

function isArticleComment(value: unknown): value is ArticleComment {
  if (!value || typeof value !== "object") return false;
  const comment = value as Record<string, unknown>;
  return (
    typeof comment.id === "string" &&
    typeof comment.name === "string" &&
    typeof comment.message === "string" &&
    typeof comment.createdAt === "string"
  );
}

function isArticleFeedback(value: unknown): value is ArticleFeedback {
  if (!value || typeof value !== "object") return false;
  const feedback = value as Record<string, unknown>;
  return (
    (feedback.reaction === null ||
      feedback.reaction === "like" ||
      feedback.reaction === "dislike") &&
    Array.isArray(feedback.comments) &&
    feedback.comments.every(isArticleComment)
  );
}

function isStoredFeedback(value: unknown): value is Record<string, ArticleFeedback> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return Object.values(value).every(isArticleFeedback);
}

export default function NewsArticleFeedback({
  articleSlug,
}: {
  articleSlug: string;
}) {
  const { language, t } = useLanguage();
  const [feedback, setFeedback] = useState<ArticleFeedback>(emptyFeedback);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [storageError, setStorageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(storageKey);
      if (storedValue) {
        const parsedValue: unknown = JSON.parse(storedValue);
        if (!isStoredFeedback(parsedValue)) {
          throw new Error("Stored news feedback has an invalid format.");
        }
        setFeedback(parsedValue[articleSlug] ?? emptyFeedback);
      } else {
        setFeedback(emptyFeedback);
      }
    } catch (error) {
      console.error("Unable to load saved news feedback.", error);
      setStorageError(true);
      setFeedback(emptyFeedback);
    } finally {
      setIsLoaded(true);
      setIsDirty(false);
    }
  }, [articleSlug]);

  useEffect(() => {
    if (!isLoaded || !isDirty) return;

    try {
      const storedValue = window.localStorage.getItem(storageKey);
      const parsedValue: unknown = storedValue ? JSON.parse(storedValue) : {};
      if (!isStoredFeedback(parsedValue)) {
        throw new Error("Stored news feedback has an invalid format.");
      }
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ ...parsedValue, [articleSlug]: feedback }),
      );
      setStorageError(false);
      setIsDirty(false);
    } catch (error) {
      console.error("Unable to save news feedback.", error);
      setStorageError(true);
    }
  }, [articleSlug, feedback, isDirty, isLoaded]);

  const updateReaction = (reaction: Exclude<Reaction, null>) => {
    setFeedback((current) => ({
      ...current,
      reaction: current.reaction === reaction ? null : reaction,
    }));
    setIsDirty(true);
  };

  const submitComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedName = name.trim();
    const normalizedMessage = message.trim();
    if (!normalizedName || !normalizedMessage) return;

    setFeedback((current) => ({
      ...current,
      comments: [
        {
          id: crypto.randomUUID(),
          name: normalizedName,
          message: normalizedMessage,
          createdAt: new Date().toISOString(),
        },
        ...current.comments,
      ],
    }));
    setIsDirty(true);
    setName("");
    setMessage("");
  };

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  return (
    <section className="news-feedback" aria-labelledby="news-feedback-title">
      <h2 id="news-feedback-title">{t("Bình luận và cảm xúc")}</h2>
      <p className="news-feedback-note">
        {t("Phản hồi được lưu trên trình duyệt hiện tại, chưa được gửi lên máy chủ.")}
      </p>

      <div className="news-reactions" role="group" aria-label={t("Đánh giá bài viết")}>
        <button
          type="button"
          className={`news-reaction${feedback.reaction === "like" ? " is-selected" : ""}`}
          aria-pressed={feedback.reaction === "like"}
          onClick={() => updateReaction("like")}
        >
          <ThumbsUp size={18} aria-hidden="true" />
          {t("Thích")}
          <span>{feedback.reaction === "like" ? 1 : 0}</span>
        </button>
        <button
          type="button"
          className={`news-reaction${feedback.reaction === "dislike" ? " is-selected" : ""}`}
          aria-pressed={feedback.reaction === "dislike"}
          onClick={() => updateReaction("dislike")}
        >
          <ThumbsDown size={18} aria-hidden="true" />
          {t("Không thích")}
          <span>{feedback.reaction === "dislike" ? 1 : 0}</span>
        </button>
      </div>

      <form className="news-comment-form" onSubmit={submitComment}>
        <label>
          <span>{t("Tên hiển thị")}</span>
          <input
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <span>{t("Bình luận")}</span>
          <textarea
            rows={4}
            maxLength={1000}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button className="news-comment-submit" type="submit">
          {t("Gửi bình luận")}
        </button>
      </form>

      {storageError && (
        <p className="news-feedback-error" role="status">
          {t("Không thể lưu phản hồi trên trình duyệt này.")}
        </p>
      )}

      <div className="news-comments" aria-live="polite">
        <h3>
          {t("Bình luận")} ({feedback.comments.length})
        </h3>
        {feedback.comments.length === 0 ? (
          <p className="news-comments-empty">{t("Chưa có bình luận. Hãy là người đầu tiên chia sẻ ý kiến.")}</p>
        ) : (
          feedback.comments.map((comment) => (
            <article className="news-comment" key={comment.id}>
              <div className="news-comment-meta">
                <strong>{comment.name}</strong>
                <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
              </div>
              <p>{comment.message}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
