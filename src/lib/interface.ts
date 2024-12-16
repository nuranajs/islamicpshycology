export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
  }
  
  export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
  }
  // types/sanity.d.ts
interface SanityConfig {
  projectId: string
  dataset: string
  apiVersion: string
  useCdn?: boolean
}
  