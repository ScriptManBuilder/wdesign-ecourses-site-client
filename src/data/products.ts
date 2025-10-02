// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Improved video path generation with fallback
const getVideoPath = (filename: string): string => {
  const publicUrl = process.env.PUBLIC_URL || 'https://www.design-ecourses.com';
  const videoPath = `/videos/${filename}`;
  const fullPath = `${publicUrl}${videoPath}`;
  
  // Debug logging
  if (process.env.REACT_APP_DEBUG_VIDEOS === 'true' || process.env.NODE_ENV === 'development') {
    console.log('🎬 Video Debug Info:');
    console.log('- Filename:', filename);
    console.log('- PUBLIC_URL:', process.env.PUBLIC_URL);
    console.log('- Fallback URL: https://www.design-ecourses.com');
    console.log('- Final path:', fullPath);
    console.log('- Environment:', process.env.NODE_ENV);
  }
  
  return fullPath;
};

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  const baseUrl = process.env.PUBLIC_URL || 'https://www.design-ecourses.com';
  // Используем img_8.jpg для всех курсов
  return `${baseUrl}/images/img_8.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем автогенерацию из видео
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId >= 1 && productId <= 30) {
    const filename = `Web Design with WordPress Everything from Beginning to End Derri (${productId}).mp4`;
    return getVideoPath(filename);
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  const createVideoPath = (num: number) => 
    getVideoPath(`Web Design with WordPress Everything from Beginning to End Derri (${num}).mp4`);
  
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [createVideoPath(12), createVideoPath(17)]; // заменяем 13 на 17, так как 18 удален
  }
  if (productId === 6) {
    return [createVideoPath(14), createVideoPath(15)];
  }
  if (productId === 7) {
    return [createVideoPath(16), createVideoPath(19)]; // заменяем 17 на 19
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [createVideoPath(20), createVideoPath(21), createVideoPath(22)];
  }
  if (productId === 9) {
    return [createVideoPath(23), createVideoPath(24), createVideoPath(25)];
  }
  if (productId === 10) {
    return [createVideoPath(26), createVideoPath(28), createVideoPath(29)]; // пропускаем 27
  }
  
  // Course 11: 4 videos
  if (productId === 11) {
    return [createVideoPath(30), createVideoPath(1), createVideoPath(2), createVideoPath(3)];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "WordPress Fundamentals: Platform Setup & Configuration",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Learn WordPress basics: choosing your platform, local vs remote development, and initial configuration.",
    detailedDescription: "Master WordPress fundamentals including platform differences between WordPress.com & WordPress.org, local development setup with Flywheel, and essential configuration steps. Perfect for complete beginners.",
    category: "WordPress Basics",
    features: [
      "1.5 hours of content",
      "WordPress platform comparison",
      "Local development setup",
      "Configuration and preferences",
      "Workflow optimization"
    ],
    specifications: {
      "Duration": "1.5 hours",
      "Level": "Complete Beginner",
      "Language": "English",
      "Topics": "WordPress setup, configuration",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "WordPress Content Management: Pages, Menus & Navigation",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master WordPress content creation, pages, custom navigation menus, and site structure.",
    detailedDescription: "Learn essential WordPress content management including creating pages, building custom navigation menus, and organizing your site structure for optimal user experience.",
    category: "WordPress Content",
    features: [
      "2 hours of practical training",
      "WordPress pages creation",
      "Custom navigation menus",
      "Site structure planning",
      "Content organization"
    ],
    specifications: {
      "Duration": "2 hours",
      "Level": "Beginner",
      "Topics": "Pages, menus, navigation, content",
      "Skills": "Content management, site structure",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "WordPress Plugins, Widgets & Theme Basics",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn essential WordPress plugins, widgets, and theme fundamentals for customizing your website.",
    detailedDescription: "Master WordPress customization through plugins, widgets, and themes. Learn how to extend functionality, customize layouts, and choose the best themes for your projects.",
    category: "WordPress Customization",
    features: [
      "1 hour of focused training",
      "WordPress plugins introduction",
      "Widget management and setup",
      "Theme selection and basics",
      "Customization fundamentals"
    ],
    specifications: {
      "Duration": "1 hour",
      "Level": "Beginner to Intermediate",
      "Topics": "Plugins, widgets, themes",
      "Practice": "Hands-on customization",
      "Access": "10 months",
      "Bonus": "Plugin recommendations guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "WordPress Theme Installation & Child Themes",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Learn theme installation, activation, and creating child themes for safe customizations.",
    detailedDescription: "Master WordPress theme management including installation, activation, and creating child themes. Learn best practices for theme customization while maintaining update safety.",
    category: "WordPress Themes",
    features: [
      "1.5 hours of intensive training",
      "Theme installation process",
      "Child theme creation",
      "Safe customization methods",
      "Blueprint setup workflow"
    ],
    specifications: {
      "Duration": "1.5 hours",
      "Level": "Intermediate",
      "Topics": "Themes, child themes, customization",
      "Projects": "Theme setup projects",
      "Access": "8 months",
      "Bonus": "Theme selection guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "WordPress Portfolio Website Development",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Build a professional portfolio website with custom logos, hero images, and optimized layouts.",
    detailedDescription: "Create a stunning portfolio website using WordPress. This comprehensive course covers logo creation, hero image setup, portfolio organization, and professional design techniques.",
    category: "WordPress Portfolio",
    features: [
      "2 comprehensive video modules",
      "3 hours of advanced training",
      "Custom logo creation",
      "Hero image design",
      "Portfolio setup and organization",
      "Professional styling techniques"
    ],
    specifications: {
      "Duration": "3 hours",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Topics": "Portfolio design, branding, layouts",
      "Projects": "Complete portfolio website",
      "Access": "10 months",
      "Bonus": "Portfolio optimization guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "WordPress Video Integration & Advanced Backgrounds",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn to add looping video backgrounds, custom headers, and advanced multimedia integration.",
    detailedDescription: "Master advanced WordPress multimedia features including looping video backgrounds, custom header creation, and professional video integration techniques for modern websites.",
    category: "WordPress Video",
    features: [
      "2 detailed video modules",
      "3.5 hours of video training",
      "Looping video backgrounds",
      "Custom header creation",
      "Multimedia optimization",
      "Performance considerations"
    ],
    specifications: {
      "Duration": "3.5 hours",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Topics": "Video integration, headers, multimedia",
      "Tools": "Video editing, compression",
      "Access": "12 months",
      "Support": "Video optimization guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "WordPress Blog Setup & Content Management",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master WordPress blogging: posts, categories, tags, comments, and content organization.",
    detailedDescription: "Learn comprehensive WordPress blogging including post creation, category and tag management, comment moderation, and effective content organization strategies.",
    category: "WordPress Blogging",
    features: [
      "2 comprehensive video modules",
      "4 hours of blogging training",
      "Post creation and management",
      "Categories and tags setup",
      "Comment system configuration",
      "Content strategy planning"
    ],
    specifications: {
      "Duration": "4 hours",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Topics": "Blogging, posts, categories, comments",
      "Projects": "Complete blog setup",
      "Access": "12 months",
      "Bonus": "Content strategy guide"
    },
    inStock: true
  },
  {
    id: 8,
    name: "WordPress Contact Forms & User Interaction",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Create professional contact forms using Contact Form 7 and Gravity Forms for client communication.",
    detailedDescription: "Master WordPress contact form creation and configuration. Learn Contact Form 7 installation, customization, and explore premium alternatives like Gravity Forms for advanced functionality.",
    category: "WordPress Forms",
    features: [
      "3 detailed video modules",
      "5 hours of form training",
      "Contact Form 7 mastery",
      "Gravity Forms introduction",
      "Form customization techniques",
      "User interaction optimization"
    ],
    specifications: {
      "Duration": "5 hours",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Topics": "Contact forms, user interaction, plugins",
      "Forms": "Multiple form implementations",
      "Access": "12 months",
      "Bonus": "Form optimization guide"
    },
    inStock: true
  },
  {
    id: 9,
    name: "WordPress Hosting & Deployment with Flywheel",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Learn professional WordPress hosting setup, Flywheel deployment, and local-to-live site management.",
    detailedDescription: "Master WordPress hosting and deployment using Flywheel. Learn to set up hosting accounts, push/pull sites between local and live environments, and manage professional WordPress deployments.",
    category: "WordPress Hosting",
    features: [
      "3 comprehensive video modules",
      "6 hours of hosting training",
      "Flywheel hosting setup",
      "Local to live deployment",
      "Site management workflows",
      "Backup and security practices"
    ],
    specifications: {
      "Duration": "6 hours",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Topics": "Hosting, deployment, site management",
      "Projects": "Complete deployment workflow",
      "Access": "15 months",
      "Bonus": "Hosting comparison guide"
    },
    inStock: true
  },
  {
    id: 10,
    name: "WordPress Page Builders & Advanced Customization",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master WordPress page builders, demo content installation, and advanced template customization.",
    detailedDescription: "Learn advanced WordPress customization using page builders, demo content installation, and template-based page creation for rapid website development.",
    category: "WordPress Page Builders",
    features: [
      "3 detailed video modules",
      "7 hours of page builder training",
      "Page builder mastery",
      "Demo content installation",
      "Template customization",
      "Workflow optimization"
    ],
    specifications: {
      "Duration": "7 hours",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Topics": "Page builders, templates, customization",
      "Features": "Advanced layouts, content blocks",
      "Access": "15 months",
      "Bonus": "Page builder comparison guide"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Real Client WordPress Project: Complete Case Study",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Follow a complete real client WordPress project from backup to final delivery with professional workflows.",
    detailedDescription: "Experience a real client WordPress project from start to finish. Learn professional workflows including site backup, theme installation, logo setup, and rapid page creation using templates.",
    category: "WordPress Client Work",
    features: [
      "4 comprehensive video modules",
      "8 hours of client project training",
      "Real client case study",
      "Professional backup procedures",
      "Theme setup and configuration",
      "Template-based rapid development"
    ],
    specifications: {
      "Duration": "8 hours",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Topics": "Client work, project management, delivery",
      "Projects": "Complete client website build",
      "Access": "18 months",
      "Bonus": "Client workflow templates"
    },
    inStock: true
  }
];
