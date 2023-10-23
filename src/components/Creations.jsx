import { creationGallery } from "../../data"

function Creations() {
  return (
    <section id="creation-section">
      <header>
        <h2 className="section-title">our creations</h2>
        <button className="see-all-btn see-all-desktop">see all</button>
      </header>

      <div>
        <ul className="creations-gallery">
          {creationGallery.map((title, i) => (
            <li
              key={i}
              className={`creation-item ${title.replaceAll(" ", "-")}`}
            >
              <div className="overlay"></div>
              <h3>{title.toUpperCase()}</h3>
            </li>
          ))}
        </ul>
      </div>

      <button className="see-all-btn see-all-mobile">see all</button>
    </section>
  )
}

export default Creations
