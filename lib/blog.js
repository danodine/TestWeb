export const blogPosts = [
  {
    slug: "dolor-de-tobillo-causas-y-tratamiento",
    title:
      "Advanced Techniques in Ankle Reconstruction.Dolor de tobillo: causas y tratamiento",
    type: "Investigación",
    date: "12 de Octubre, 2024",
    paragraph1:
      "The evolution of orthopedic surgery has reached a pivotal junction where robotics and biological engineering converge. In ankle reconstruction, the stakes are measured in millimeters and years of restored mobility.",
    paragraph2:
      "Traditionally, complex ankle fractures and degenerative conditions were treated with restrictive immobilization or fusion. Today, we employ a Vanguard Protocol that prioritizes the restoration of natural kinematics through custom 3D-printed titanium scaffolds and regenerative stem-cell matrices.",
    note: "Precision at the sub-millimeter level is no longer a luxury—it is the standard. By utilizing real-time intraoperative navigation, we can ensure the prosthetic alignment matches the patient's unique biomechanical signature with 99.8% accuracy.",
    noteTitle: "The Robotic Advantage",
    subtitle: "Proprietary Reconstruction Methods",
    subparagraph1:
      "Our approach involves a three-phase integration. First, the digital twin mapping: we create a complete holographic representation of the patient's skeletal structure. This allows for virtual stress-testing before a single incision is made.",
    image: "/assets/images/Foto_vision.png",
    subparagraph2:
      "The second phase involves the biological catalyst. By leveraging the patient's own growth factors, we accelerate the integration between bone and titanium, reducing recovery time by up to 40% compared to traditional methods used in the last decade.",
    list: [
      "Minimal invasive portals reducing soft-tissue trauma.",
      "Customized ligament tensioning based on AI gait analysis.",
      "Post-operative neural-feedback recovery tracking.",
    ],
  },
  {
    slug: "dolor-de-tobillo-causas-y-tratamiento",
    title:
      "Advanced Techniques in Ankle Reconstruction.Dolor de tobillo: causas y tratamiento",
    type: "Investigación",
    date: "12 de Octubre, 2024",
    paragraph1:
      "The evolution of orthopedic surgery has reached a pivotal junction where robotics and biological engineering converge. In ankle reconstruction, the stakes are measured in millimeters and years of restored mobility.",
    paragraph2:
      "Traditionally, complex ankle fractures and degenerative conditions were treated with restrictive immobilization or fusion. Today, we employ a Vanguard Protocol that prioritizes the restoration of natural kinematics through custom 3D-printed titanium scaffolds and regenerative stem-cell matrices.",
    note: "Precision at the sub-millimeter level is no longer a luxury—it is the standard. By utilizing real-time intraoperative navigation, we can ensure the prosthetic alignment matches the patient's unique biomechanical signature with 99.8% accuracy.",
    noteTitle: "The Robotic Advantage",
    subtitle: "Proprietary Reconstruction Methods",
    subparagraph1:
      "Our approach involves a three-phase integration. First, the digital twin mapping: we create a complete holographic representation of the patient's skeletal structure. This allows for virtual stress-testing before a single incision is made.",
    image: "/assets/images/Foto_vision.png",
    subparagraph2:
      "The second phase involves the biological catalyst. By leveraging the patient's own growth factors, we accelerate the integration between bone and titanium, reducing recovery time by up to 40% compared to traditional methods used in the last decade.",
    list: [
      "Minimal invasive portals reducing soft-tissue trauma.",
      "Customized ligament tensioning based on AI gait analysis.",
      "Post-operative neural-feedback recovery tracking.",
    ],
  },
  {
    slug: "dolor-de-tobillo-causas-y-tratamiento",
    title:
      "Advanced Techniques in Ankle Reconstruction.Dolor de tobillo: causas y tratamiento",
    type: "Investigación",
    date: "12 de Octubre, 2024",
    paragraph1:
      "The evolution of orthopedic surgery has reached a pivotal junction where robotics and biological engineering converge. In ankle reconstruction, the stakes are measured in millimeters and years of restored mobility.",
    paragraph2:
      "Traditionally, complex ankle fractures and degenerative conditions were treated with restrictive immobilization or fusion. Today, we employ a Vanguard Protocol that prioritizes the restoration of natural kinematics through custom 3D-printed titanium scaffolds and regenerative stem-cell matrices.",
    note: "Precision at the sub-millimeter level is no longer a luxury—it is the standard. By utilizing real-time intraoperative navigation, we can ensure the prosthetic alignment matches the patient's unique biomechanical signature with 99.8% accuracy.",
    noteTitle: "The Robotic Advantage",
    subtitle: "Proprietary Reconstruction Methods",
    subparagraph1:
      "Our approach involves a three-phase integration. First, the digital twin mapping: we create a complete holographic representation of the patient's skeletal structure. This allows for virtual stress-testing before a single incision is made.",
    image: "/assets/images/Foto_vision.png",
    subparagraph2:
      "The second phase involves the biological catalyst. By leveraging the patient's own growth factors, we accelerate the integration between bone and titanium, reducing recovery time by up to 40% compared to traditional methods used in the last decade.",
    list: [
      "Minimal invasive portals reducing soft-tissue trauma.",
      "Customized ligament tensioning based on AI gait analysis.",
      "Post-operative neural-feedback recovery tracking.",
    ],
  },
  {
    slug: "dolor-de-tobillo-causas-y-tratamiento",
    title:
      "Advanced Techniques in Ankle Reconstruction.Dolor de tobillo: causas y tratamiento",
    type: "Investigación",
    date: "12 de Octubre, 2024",
    paragraph1:
      "The evolution of orthopedic surgery has reached a pivotal junction where robotics and biological engineering converge. In ankle reconstruction, the stakes are measured in millimeters and years of restored mobility.",
    paragraph2:
      "Traditionally, complex ankle fractures and degenerative conditions were treated with restrictive immobilization or fusion. Today, we employ a Vanguard Protocol that prioritizes the restoration of natural kinematics through custom 3D-printed titanium scaffolds and regenerative stem-cell matrices.",
    note: "Precision at the sub-millimeter level is no longer a luxury—it is the standard. By utilizing real-time intraoperative navigation, we can ensure the prosthetic alignment matches the patient's unique biomechanical signature with 99.8% accuracy.",
    noteTitle: "The Robotic Advantage",
    subtitle: "Proprietary Reconstruction Methods",
    subparagraph1:
      "Our approach involves a three-phase integration. First, the digital twin mapping: we create a complete holographic representation of the patient's skeletal structure. This allows for virtual stress-testing before a single incision is made.",
    image: "/assets/images/Foto_vision.png",
    subparagraph2:
      "The second phase involves the biological catalyst. By leveraging the patient's own growth factors, we accelerate the integration between bone and titanium, reducing recovery time by up to 40% compared to traditional methods used in the last decade.",
    list: [
      "Minimal invasive portals reducing soft-tissue trauma.",
      "Customized ligament tensioning based on AI gait analysis.",
      "Post-operative neural-feedback recovery tracking.",
    ],
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
