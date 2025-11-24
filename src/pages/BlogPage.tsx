import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";


const BlogPage = () => {
  const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Dental Implants: What You Need to Know",
    excerpt: "Learn everything about dental implants, from the procedure to recovery and maintenance tips.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Dental Implants",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Dr. Naveetha"
  },
  {
    id: 2,
    title: "Root Canal Treatment: Myths vs Facts",
    excerpt: "Debunking common misconceptions about root canal treatment and explaining the modern painless procedure.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Root Canal",
    date: "2024-01-10",
    readTime: "4 min read",
    author: "Dr. Pratyusha"
  },
  {
    id: 3,
    title: "Teeth Whitening: Professional vs At-Home Methods",
    excerpt: "Compare different teeth whitening options and learn which method works best for your needs.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Cosmetic Dentistry",
    date: "2024-01-05",
    readTime: "6 min read",
    author: "Dr. Suresh"
  },
  {
    id: 4,
    title: "Maintaining Oral Health During Pregnancy",
    excerpt: "Essential dental care tips for expectant mothers to ensure healthy teeth and gums.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Preventive Care",
    date: "2024-01-01",
    readTime: "7 min read",
    author: "Dr. Naveetha"
  },
  {
    id: 5,
    title: "Wisdom Tooth Extraction: When Is It Necessary?",
    excerpt: "Understanding when wisdom teeth need to be removed and what to expect during the procedure.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Oral Surgery",
    date: "2023-12-28",
    readTime: "5 min read",
    author: "Dr. Suresh"
  },
  {
    id: 6,
    title: "The Benefits of Invisible Braces for Adults",
    excerpt: "Explore how invisible braces can help adults achieve straight teeth without traditional metal braces.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Orthodontics",
    date: "2023-12-25",
    readTime: "4 min read",
    author: "Dr. Pratyusha"
  }];


  const categories = [
  "All",
  "Dental Implants",
  "Root Canal",
  "Cosmetic Dentistry",
  "Preventive Care",
  "Oral Surgery",
  "Orthodontics"];


  return (
    <>
      <SEO
        title="Dental Blog - Tips, Guides & Latest News | Gnathos Dental"
        description="Read the latest dental health tips, treatment guides, and news from our expert dentists at Gnathos Dental in Hyderabad."
        keywords="dental blog, dental tips, oral health, dental care, gnathos dental" />

      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-400 to-teal-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dental Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay informed with the latest dental health tips, treatment guides, and insights from our expert dentists
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) =>
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-gnathos-primary hover:text-white transition-colors">

                  {category}
                </Badge>
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) =>
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 hover:text-gnathos-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-gnathos-primary to-gnathos-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest dental health tips and treatment updates delivered to your inbox
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />

              <Button className="bg-white text-gnathos-primary hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>);

};

export default BlogPage;