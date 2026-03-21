"use client";

import {
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Loader2,
  MessageSquare,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CTASection from "@/components/shared/CTASection";

// Generate calendar days for a month
function generateCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const days: (number | null)[] = [];

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const [activeTab, setActiveTab] = useState<"book" | "message">("book");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const today = new Date();
  const isCurrentMonth =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();

  const calendarDays = generateCalendarDays(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const isDateAvailable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    // Available Monday to Friday, and not in the past
    const isPast = isCurrentMonth && day < today.getDate();
    return dayOfWeek !== 0 && dayOfWeek !== 6 && !isPast;
  };

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/4210891837/2445232556.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-8 max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-5">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight">
          {t("titlePrefix")}{" "}
          <span className="gradient-text-pink font-serif italic">
            {t("titleHighlight")}
          </span>
        </h1>
      </section>

      {/* Tabs */}
      <section className="px-6 max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          {/* Book a Call Tab */}
          <button
            type="button"
            onClick={() => setActiveTab("book")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === "book"
                ? "bg-white text-black"
                : "bg-zinc-800/50 text-zinc-400 hover:text-white border border-zinc-700"
            }`}
          >
            <Calendar size={16} />
            {t("bookACall")}
          </button>

          {/* Send Message Tab */}
          <button
            type="button"
            onClick={() => setActiveTab("message")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === "message"
                ? "bg-white text-black"
                : "bg-zinc-800/50 text-zinc-400 hover:text-white border border-zinc-700"
            }`}
          >
            <MessageSquare size={16} />
            {t("sendMessage")}
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2 ml-4">
            <a
              href="mailto:will413028@gmail.com"
              className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
              title="Email"
            >
              <Image
                src="https://ext.same-assets.com/4210891837/2723767466.svg"
                alt="Email"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/will4130/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
              title="LinkedIn"
            >
              <Image
                src="https://ext.same-assets.com/4210891837/1899816707.svg"
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://github.com/will413028"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
              title="GitHub"
            >
              <Image
                src="https://ext.same-assets.com/4210891837/3395764652.svg"
                alt="GitHub"
                width={18}
                height={18}
              />
            </a>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-2xl mx-auto mb-24">
          {activeTab === "book" ? (
            /* Book a Call - Calendar Widget */
            <div className="bg-[#111113] border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Meeting Info */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-zinc-800 md:w-[280px]">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">WW</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-1">
                    {t("meetingHost")}
                  </p>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {t("meetingTitle")}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zinc-400 text-sm">
                      <CheckSquare size={16} />
                      <span>{t("requiresConfirmation")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400 text-sm">
                      <Clock size={16} />
                      <span>30m</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400 text-sm">
                      <Video size={16} className="text-green-500" />
                      <span>{t("googleMeet")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400 text-sm">
                      <Globe size={16} />
                      <span>{t("select")}</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Right Side - Calendar */}
                <div className="flex-1 p-6">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-white font-medium">
                      {monthNames[currentMonth]}{" "}
                      <span className="text-zinc-500">{currentYear}</span>
                    </h4>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs text-zinc-500 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, calendarIndex) => {
                      if (day === null) {
                        return (
                          <div
                            key={`empty-${calendarIndex}`}
                            className="aspect-square"
                          />
                        );
                      }

                      const available = isDateAvailable(day);
                      const isSelected = selectedDate === day;
                      const isToday = isCurrentMonth && day === today.getDate();

                      return (
                        <button
                          type="button"
                          key={day}
                          onClick={() => available && setSelectedDate(day)}
                          disabled={!available}
                          className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all relative ${
                            isSelected
                              ? "bg-zinc-700 text-white"
                              : available
                                ? "text-white hover:bg-zinc-800"
                                : "text-zinc-600 cursor-not-allowed"
                          }`}
                        >
                          {day}
                          {isToday && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Date Info */}
                  {selectedDate && (
                    <div className="mt-6 p-4 bg-zinc-800/50 rounded-xl">
                      <p className="text-zinc-400 text-sm mb-2">
                        {t("selected")} {monthNames[currentMonth]}{" "}
                        {selectedDate}, {currentYear}
                      </p>
                      <button
                        type="button"
                        className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-colors"
                      >
                        {t("confirmBooking")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Send Message - Contact Form */
            <div className="bg-[#111113] border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                {t("sendMessage")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-zinc-400 mb-2"
                    >
                      {t("nameLabel")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder={t("namePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-zinc-400 mb-2"
                    >
                      {t("emailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder={t("emailPlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    placeholder={t("messagePlaceholder")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-zinc-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === "loading" && (
                    <Loader2 size={18} className="animate-spin" />
                  )}
                  {t("sendMessageButton")}
                </button>

                {submitStatus === "success" && (
                  <p className="text-emerald-400 text-sm text-center mt-4">
                    {t("messageSent")}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm text-center mt-4">
                    {t("messageError")}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
