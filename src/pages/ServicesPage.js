import React, { useState } from 'react';
import '../style/ServicesPage.css';
import Navbar from '../components/Navbar';

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  const handleCardClick = (service) => {
    console.log('Card clicked:', service);
    setExpandedService(prevService => 
      prevService?.title === service.title ? null : service
    );
  };

  const services = [
    {
      title: "Orthopedic Care",
      icon: "fas fa-crutch",
      description: "Expert treatment for rotator cuff repairs, hip, knee, and ankle injuries. Get back to your active lifestyle with our specialized care.",
      detailedDescription: (
        <>
          <p>Our orthopedic care program focuses on treating musculoskeletal injuries and conditions affecting bones, joints, muscles, and soft tissues.</p>

          <p><strong>Common Conditions We Treat:</strong>
          • Rotator cuff injuries
          • ACL/MCL tears
          • Tennis/Golf elbow
          • Carpal tunnel syndrome
          • Hip and knee replacements
          • Sports injuries</p>

          <p><strong>Our Specialized Treatments Include:</strong>
          • Post-surgical rehabilitation
          • Joint mobilization techniques
          • Strength training and conditioning
          • Sports injury recovery
          • Custom exercise programs
          • Manual therapy techniques</p>

          <p><strong>Benefits of Our Orthopedic Care:</strong>
          • Reduced pain and inflammation
          • Improved mobility and strength
          • Faster recovery times
          • Prevention of future injuries
          • Return to daily activities
          • Enhanced athletic performance</p>
        </>
      )
    },
    {
      title: "Musculoskeletal Therapy",
      icon: "fas fa-user-injured",
      description: "Effective relief for neck and lower back pain through targeted therapeutic exercises and trigger point therapy.",
      detailedDescription: (
        <>
          <p>Our musculoskeletal therapy program addresses pain and dysfunction in muscles, tendons, ligaments, and joints.</p>

          <p><strong>Common Conditions We Treat:</strong>
          • Chronic back pain
          • Neck pain and stiffness
          • Shoulder impingement
          • Sciatica
          • Arthritis
          • Muscle strains</p>

          <p><strong>Our Comprehensive Approach:</strong>
          • Manual therapy techniques
          • Therapeutic exercises
          • Postural correction
          • Pain management strategies
          • Movement pattern retraining
          • Ergonomic education</p>

          <p><strong>Expected Outcomes:</strong>
          • Pain reduction
          • Improved flexibility
          • Better posture
          • Increased strength
          • Enhanced function
          • Prevention strategies</p>
        </>
      )
    },
    {
      title: "Athletic Recovery",
      icon: "fas fa-running",
      description: "Specialized rehabilitation programs for athletes, focusing on injury recovery and performance enhancement.",
      detailedDescription: (
        <>
          <p>Our athletic recovery programs are designed to help athletes recover from injuries and improve their performance through evidence-based rehabilitation techniques.</p>

          <p><strong>Common Athletic Conditions:</strong>
          • Sports-related injuries
          • Muscle strains and sprains
          • Ligament tears
          • Tendinitis
          • Post-surgical rehabilitation
          • Overuse injuries</p>

          <p><strong>Our Athletic Programs Include:</strong>
          • Sport-specific training
          • Injury prevention strategies
          • Performance enhancement
          • Biomechanical analysis
          • Return-to-play protocols
          • Strength and conditioning</p>

          <p><strong>Program Benefits:</strong>
          • Faster recovery times
          • Improved athletic performance
          • Injury prevention education
          • Enhanced flexibility and strength
          • Better body mechanics
          • Personalized training plans</p>
        </>
      )
    },
    {
      title: "Neurological Rehabilitation",
      icon: "fas fa-brain",
      description: "Comprehensive care for stroke recovery, Bell's palsy, Parkinson's disease, and balance disorders.",
      detailedDescription: (
        <>
          <p>Our neurological rehabilitation program helps patients recover from neurological conditions and injuries through specialized therapeutic techniques.</p>

          <p><strong>Conditions We Treat:</strong>
          • Stroke recovery
          • Parkinson's disease
          • Multiple sclerosis
          • Bell's palsy
          • Balance disorders
          • Peripheral neuropathy</p>

          <p><strong>Our Specialized Approach:</strong>
          • Balance and coordination training
          • Gait analysis and training
          • Functional movement restoration
          • Cognitive-motor integration
          • Adaptive strategy development
          • Daily activity retraining</p>

          <p><strong>Treatment Outcomes:</strong>
          • Improved balance and stability
          • Enhanced mobility
          • Better coordination
          • Increased independence
          • Improved quality of life
          • Greater confidence in movement</p>
        </>
      )
    },
    {
      title: "Advanced Treatment Methods",
      icon: "fas fa-microscope",
      description: "Utilizing state-of-the-art techniques including electrical stimulation, therapeutic exercises, and gait training.",
      detailedDescription: (
        <>
          <p>We employ cutting-edge treatment methods and technologies to optimize your recovery and enhance therapeutic outcomes.</p>

          <p><strong>Advanced Technologies:</strong>
          • Electrical stimulation therapy
          • Ultrasound therapy
          • Laser therapy
          • Movement analysis technology
          • Therapeutic taping
          • Biofeedback systems</p>

          <p><strong>Treatment Applications:</strong>
          • Pain management
          • Muscle re-education
          • Tissue healing
          • Range of motion improvement
          • Strength enhancement
          • Functional training</p>

          <p><strong>Clinical Benefits:</strong>
          • Accelerated healing
          • Reduced pain and inflammation
          • Improved muscle function
          • Enhanced recovery
          • Better treatment outcomes
          • Evidence-based results</p>
        </>
      )
    },
    {
      title: "Personalized Care Plans",
      icon: "fas fa-clipboard-list",
      description: "Customized treatment programs combining various therapeutic approaches to meet your specific recovery goals.",
      detailedDescription: (
        <>
          <p>We develop individualized treatment plans tailored to your specific needs, goals, and lifestyle requirements.</p>

          <p><strong>Plan Development Process:</strong>
          • Comprehensive initial assessment
          • Goal-setting consultation
          • Progress tracking
          • Treatment plan adjustments
          • Home exercise programs
          • Regular progress evaluations</p>

          <p><strong>Customization Factors:</strong>
          • Individual condition specifics
          • Personal goals and needs
          • Lifestyle considerations
          • Work requirements
          • Activity level
          • Recovery timeline</p>

          <p><strong>Plan Components:</strong>
          • Targeted exercises
          • Manual therapy
          • Pain management strategies
          • Activity modifications
          • Home care instructions
          • Progress milestones</p>
        </>
      )
    }
  ];

  console.log('Current expanded service:', expandedService);

  return (
    <div className="services-page">
      <Navbar />
      <div className="services-content">
        <h1>Our Services</h1>
        <p className="services-intro">
          At Mangoos Physical Therapy, we offer a comprehensive range of physical therapy services tailored to meet your specific needs. Our experienced team uses evidence-based treatments to help you achieve optimal recovery and wellness.
        </p>
        <div className="services-grid">
          {services.map((service, index) => {
            const isExpanded = expandedService?.title === service.title;
            return (
              <div
                key={index}
                className={`service-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handleCardClick(service)}
              >
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {!isExpanded && (
                  <div className="click-hint">
                    <span>Click to learn more</span>
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                )}
                {isExpanded && (
                  <div className="service-card-content">
                    {service.detailedDescription}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {expandedService && (
        <div className="overlay" onClick={() => setExpandedService(null)} />
      )}
    </div>
  );
}

export default ServicesPage;
