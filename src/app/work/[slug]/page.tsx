import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navigation />

      {/* Hero Section */}
      <section className={`relative px-6 pt-32 pb-24 bg-gradient-to-br ${project.gradient}`}>
        <div className="max-w-6xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
              {project.type}
            </span>
            <span className="text-sm text-white/60">{project.quarter}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium text-white mb-4">
            {project.title}
            {project.subtitle && (
              <span className="text-white/60 ml-4">{project.subtitle}</span>
            )}
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium mb-6">About the Project</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              {project.longDescription}
            </p>

            <h2 className="text-2xl font-medium mb-6">Key Features</h2>
            <div className="space-y-4 mb-12">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-zinc-300">{feature}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-medium mb-6">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl"
                >
                  <p className="text-zinc-300">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Project Info Card */}
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <h3 className="text-lg font-medium mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Type</p>
                    <p className="text-zinc-200">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Timeline</p>
                    <p className="text-zinc-200">{project.quarter}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Stack</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl">
                <h3 className="text-lg font-medium mb-2">Like what you see?</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Let's discuss how I can help with your project.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors text-sm"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="px-6 py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-zinc-500 mb-2">
                  <ArrowLeft size={16} />
                  <span className="text-sm">Previous Project</span>
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {prevProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-2 text-zinc-500 mb-2">
                  <span className="text-sm">Next Project</span>
                  <ArrowRight size={16} />
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
