export default function Map() {
  return <div className="contact__map">
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d699.2203538609576!2d109.20129763139305!3d12.269883246499676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1679558565868!5m2!1svi!2s"
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="my map"
      />
    </div>
  </div>
}