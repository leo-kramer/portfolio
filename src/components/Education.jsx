import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import "../assets/css/index.css"
import "../assets/css/exp-edu.css"

const EducationCard = ({ logo, study, school, location, date }) => {
	return (
		<div className="education-card">
			<div>
				<img src={logo} />
				<div>
					<h5>{study}</h5>
					<p>
						{school} - {location}
					</p>
					<p>{date}</p>
				</div>
			</div>
		</div>
	)
}

EducationCard.propTypes = {
	logo: PropTypes.string.isRequired,
	study: PropTypes.string.isRequired,
	school: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
}

const Education = () => {
	const { t } = useTranslation()

	const educations = [
		{
			logo: "/portfolio/img/logo-hva.png",
			study: t("HvA study"),
			school: t("HvA school"),
			location: "Amsterdam",
			date: t("HvA date"),
		},
		{
			logo: "/portfolio/img/logo-cae.png",
			study: t("CAE study"),
			school: t("CAE school"),
			location: "Alkmaar",
			date: t("CAE date"),
		},
		{
			logo: "/portfolio/img/logo-jpthijsse.jpg",
			study: t("JPThijsse study"),
			school: t("JPThijsse school"),
			location: "Castricum",
			date: t("JPThijsse date"),
		},
	]

	return (
		<section id="education">
			{educations.map((education, index) => (
				<EducationCard
					key={index}
					logo={education.logo}
					study={education.study}
					school={education.school}
					location={education.location}
					date={education.date}
				/>
			))}
		</section>
	)
}

export default Education
