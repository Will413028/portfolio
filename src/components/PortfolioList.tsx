'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const PortfolioList = () => {
  const t = useTranslations('Portfolio');

  const projects = [
    {
      id: 1,
      title: t('project_1_title'),
      desc: t('project_1_desc'),
      tags: ['React', 'TypeScript', 'D3.js'],
      category: t('filter_web'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo8Qe8uLOjFbkJYr1omdYJlND3_u2noi_tEowYlWaMhtMgM4AvCUQ-xu0cUAazv-YWrsswDqt2BW7jgT-eOTjtdRyqJUVVvEstZJpb3UxybFYlPjVmwFMdXx9sKBFst0fKEJUiCFxATGFlxg6CTtHtF_JYDXRGwBfZ1oTe8kePVDQgFepAAVgLOyR9vEPkxw-QQlpCQ81SS_FioV7VJubogzT9XbiNeIxzrEssru9Zzpwl8POfjiMT-GAAOXmnWCR1Vf8a_Q1gj2E',
    },
    {
      id: 2,
      title: t('project_2_title'),
      desc: t('project_2_desc'),
      tags: ['Flutter', 'Firebase', 'Google Maps API'],
      category: t('filter_mobile'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr6U7sVWa4woTwQ2QOlUbp7UnLbPeMb_cXHEicMgzszF2Kl7rL6R2GUrqjBPnQewau2YRwKgQoOzvw56L_GJ1hWPUlmzsIixochVAeQxRKBvg6Rwsj_iB6SZ5UnC4NxwM7MnbQKrdFJgAyNZReDG5392FiNGyMsQaKn6xZMIre1EgwW-XT5L6HKUWXrNS9MkzAm_Q_G03fWhMhANLXOGCLNjiUE9OYK46QZNmIUs0E2TUPrFjLSQy1W0GHXQ6BPTdr_qW5B5f6-pY',
    },
    {
      id: 3,
      title: t('project_3_title'),
      desc: t('project_3_desc'),
      tags: ['Go', 'Docker', 'Redis'],
      category: t('filter_backend'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3XapjnKCLncmTTX38WEigo2kuuvCshnwzbCdUFz2t6wXOrrNFBRxnz2w6Tnn-BOlDC1qkqNFhxtpVklx-XUpLwBw8AC3KM9-zu6Po92e7nPJrJaAEUJ3RXLcD0a3Wo-_qHXCIwEldNZNtaNEbi9Xq8amfyDM05TjQuqBe7LJLl0EPrwDpa-sSsX6He3rmOHPDTQJMi6IFx15qnCf_IEX4siVpN9xxrR2pJ3kPQG0m7Y2siuNSIRD3DuY5ghcwI1fOevieQjQSpbM',
    },
    {
      id: 4,
      title: t('project_4_title'),
      desc: t('project_4_desc'),
      tags: ['Liquid', 'Tailwind CSS', 'JS'],
      category: t('filter_web'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXbB5D7EgiVyc108nVKSdJ-uDjByleT3IcHD4sVeaRB-Sn59LLUt8zPWs3aWH4fzXel5_rvVBDJHk0aTFXJo6j2r_HG9xgB2tjPDA1ra8Nzgfy_-2t7Izf6QH7-l7qt9UI8aWF62QyBAyBMCS3T2j1Wvxubjrs0EvfbIvBI6ZanmZ9sfGE9BGmthsc4jkezg9-2W9ZfQyyjMV6MEBmu8txmifDF5qbtrBh6-b0mxsERmsp5reG-n8sZdWV6l6V6MmwIRaxkz8qeTw',
    },
    {
      id: 5,
      title: t('project_5_title'),
      desc: t('project_5_desc'),
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      category: t('filter_web'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr8pY1cTTNcrai21AryTsH5SpxtxdSd0xPM90UDcI-_CzKcMPOW5JDChb_ZKXMe6YP7Q5cjGYvY0sVhn-WS54pdbbfBDjBIU12hqJI5J-WIJszWxnceATeHAcHp_uAH1RXWwf4GSKDZ5QnYSS65C9I9YtZ0HlJ1diLnLTJCvd1KAeVnv0drXOUFtqwwvVfNaLfZB5sqmCOJXTJS8_IYuXxZNb6CVjSYrkifAp1y7fRA0KK8xDCQLSJH-XsQaTnP4cab4ViI4MB6Qo',
    },
    {
      id: 6,
      title: t('project_6_title'),
      desc: t('project_6_desc'),
      tags: ['Socket.io', 'Node.js', 'WebRTC'],
      category: t('filter_web'),
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVhiAcZfJxmTu-MVIP7ycaX1kLCDdzXRP_SL883c7unnHyHD6FTSt87myfv14eaYTTLJ3VtY8ZprvhBO4wZMcB6cM0LoheQzIrkafngFGDY1gkKVVP5jOgvrd9kcGhNxhAKvgvG3jGTjz3zqIhwABiy38OxqeWjzOL-01btnIUaiwmAvlYHjPz6UP2VUsSeOUF7XrURJWb187ffSpi818vGP61uNJXAYfsMiuDosJ-_ZQQj9H1TjlKaPBuX45h7-0jwrHIesxQo8U',
    },
  ];

  const categories = [
    t('filter_all'),
    t('filter_web'),
    t('filter_mobile'),
    t('filter_backend'),
    t('filter_ui'),
  ];

  const [filter, setFilter] = useState(t('filter_all'));

  const filteredProjects =
    filter === t('filter_all') ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-10 md:gap-16 bg-[#0E0C15] min-h-screen text-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl text-white">
          {t('page_title')}
        </h1>
        <p className="max-w-2xl text-lg font-normal leading-relaxed text-gray-400">
          {t('page_description')}
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all ${
              filter === cat
                ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/20'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <p className="text-sm font-medium leading-normal">{cat}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#191919] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-[#121212]">
              <Image
                alt={project.title}
                src={project.img}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  {t('view_case_study')}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="material-symbols-outlined text-gray-500 transition-colors group-hover:text-primary">
                  arrow_outward
                </span>
              </div>
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-primary/20 hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
