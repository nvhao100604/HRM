import type { Feature } from '../../interface/interfaces'
import { Link } from 'react-router-dom'

const SectionChild = ({feature} : {feature: Feature}) => (
    <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
        <Link to={feature.featurePath}>
            <h2 className="text-xl md:text-2xl font-bold mb-4">{feature.featureName}</h2>
            <div className="text-gray-600 dark:text-gray-300">{feature.featureDescription}</div>
        </Link>
    </div>
)

const CustomSection = ({currentSection, featureList}: {currentSection: string, featureList: Feature[]}) => {
    return (
    <div className="p-4 md:p-6 animate-fadeIn">
        <div className="text-sm breadcrumbs mb-6 flex items-center">
            <span className="text-gray-600 hover:text-gray-800 transition-colors">Home</span>
            <span className="mx-2">→</span>
            <span className="text-blue-600 font-semibold text-base md:text-lg">{currentSection}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{currentSection} Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">
                Welcome to the {currentSection} section of HRM dashboard.
                </p>
            </div>
            {featureList && featureList.map((feature: Feature) => (
                <SectionChild key={feature.featureId} feature={feature}/>
            ))}
        </div>
    </div>
)
}

export default CustomSection;