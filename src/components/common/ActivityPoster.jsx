import "./ActivityPoster.css";

export default function ActivityPoster({ activity }) {
  const source = `${import.meta.env.BASE_URL}${activity.image.replace(/^\//, "")}`;

  return (
    <a
      className="activity-poster"
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Lihat poster ${activity.title} ukuran penuh`}
    >
      <img
        src={source}
        alt={`Poster ${activity.title}`}
        width={activity.width || 640}
        height={activity.height || 854}
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
