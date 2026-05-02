import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AWS Multi-Tier Scalable Architecture",
    description:
      "Built a scalable AWS multi-tier architecture using Terraform, including an Application Load Balancer, Auto Scaling Group, RDS, CloudFront, and S3.",
    link: "https://github.com/artemsaitov/aws-multi-tier-terraform-architecture",
    tags: ["AWS", "ASG", "Terraform"],
  },
  {
    title: "AWS CDK Multi-AZ VPC Project",
    description:
      "Created an AWS CDK TypeScript project that deploys a multi-AZ VPC with EC2 instances and an RDS database, demonstrating Infrastructure as Code practices.",
    link: "https://github.com/artemsaitov/vpc-cdk-project",
    tags: ["AWS", "CDK", "TypeScript"],
  },
  {
    title: "TechHealth IaC AWS CDK Migration",
    description:
      "Migrated legacy AWS infrastructure to Infrastructure as Code using AWS CDK, improving repeatability, version control, and cloud environment management.",
    link: "https://github.com/artemsaitov/techhealth-iac-aws-cdk",
    tags: ["AWS", "CDK", "TypeScript"],
  },
  {
    title: "AWS-Hosted Next.js Portfolio",
    description:
      "Built an AWS-hosted Next.js portfolio deployed with Terraform, S3, and CloudFront to showcase cloud engineering projects and deployment automation.",
    link: "#",
    tags: ["AWS", "Terraform", "Next.js"],
  },
];

const socialLinks = [
  {
    text: "GitHub",
    href: "https://github.com/artemsaitov/",
    label: "GitHub Profile",
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/artem-saitov-22382b16b/",
    label: "LinkedIn Profile",
  },
  {
    text: "Email",
    href: "mailto:art.saitov@gmail.com",
    label: "Email Artem",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <section className="flex flex-col items-center text-center">
          <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Artem Saitov profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Cloud Engineer Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Artem Saitov
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            AWS Cloud / DevOps Engineer
          </p>

          <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
            I build reliable, secure, and automated cloud environments using
            AWS, Terraform, AWS CDK, CI/CD pipelines, Docker, Kubernetes, and
            modern web technologies. This portfolio showcases hands-on cloud
            projects, infrastructure automation, and deployment workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                aria-label={social.label}
              >
                {social.text}
              </a>
            ))}

            <a
              href="mailto:art.saitov@gmail.com"
              className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </section>

        <div className="my-16 h-px w-full bg-slate-800" />

        <section>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-400/60 hover:bg-slate-900/80"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-blue-400" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Artem Saitov. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}