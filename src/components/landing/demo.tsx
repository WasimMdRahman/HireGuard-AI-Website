export default function Demo() {
  const youtubeVideoId = 'vGhxLtj54bU'; // Replace with your YouTube video ID

  return (
    <section id="demo" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            This short demo shows how recruiters can quickly identify what to verify before final interviews.
          </p>
        </div>
      </div>
    </section>
  );
}
