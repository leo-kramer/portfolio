import { useTranslation } from "react-i18next"
import "../assets/css/index.css"
import "../assets/css/about.css"

const About = () => {
	const { t } = useTranslation()

	return (
		<section>
			<section>
				<section>
					<div>
						<img
							src="/portfolio/img/pfp-1.jpg"
							alt="Leo sitting down on the right-hand side of the photo. He is looking towards the horizon. Behind him is a tree. On the left-hand side is a view of a green hilly landscape."
						/>
						<div>
							<h1>Leo Kramer</h1>
							<h3>Front-end Developer</h3>
						</div>
					</div>
					<p>📍 {t("Location")}</p>
				</section>

				<p>{t("Tagline")}</p>

				<ul>
					<li>
						<a className="primary" href="/portfolio/LeoKramerCV.pdf" download>
							Download CV
						</a>
					</li>
					<li>
						<a href="https://github.com/leo-kramer" target="_blank">
							<div className="svg-mask github"></div>
						</a>
						<a href="https://www.linkedin.com/in/leo-kramer/" target="_blank">
							<div className="svg-mask linkedin"></div>
						</a>
					</li>
				</ul>
			</section>

			<section>
				<h3>{t("Contact")}</h3>
				<div>
					<p>{t("E-mail")}</p>
					<a href="mailto:leokramer17@gmail.com" target="_blank">
						leokramer17@gmail.com
					</a>

					<p>{t("Phone")}</p>
					<a href="tel:0645921049" target="_blank">
						06 45 92 10 49
					</a>
				</div>
			</section>
		</section>
	)
}

export default About
