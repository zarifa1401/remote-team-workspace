"use client";

import { useMemo, useState } from "react";
import { BriefcaseBusiness, Search } from "lucide-react";
import TeamMemberCard from "@/components/cards/team-member-card";
import EmptyState from "@/components/ui/empty-state";
import { inputClass, panelClass } from "@/lib/utils";

export default function TeamMembersView({ teamMembers }) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All");

  const roles = ["All", ...new Set(teamMembers.map((member) => member.role))];

  const filteredMembers = useMemo(() => {
    const searchValue = query.toLowerCase();

    return teamMembers.filter((member) => {
      const matchesQuery =
        member.name.toLowerCase().includes(searchValue) ||
        member.skills.some((skill) => skill.toLowerCase().includes(searchValue));

      return matchesQuery && (role === "All" || member.role === role);
    });
  }, [query, role, teamMembers]);

  return (
    <>
      <section className={`${panelClass} p-5`}>
        <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Search team members</span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or skill"
                className={`${inputClass} pl-10`}
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Role filter</span>
            <div className="relative">
              <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select value={role} onChange={(event) => setRole(event.target.value)} className={`${inputClass} pl-10`}>
                {roles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </label>
        </div>
      </section>

      {filteredMembers.length ? (
        <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </section>
      ) : (
        <EmptyState
          title="No teammates match that search"
          description="Try a broader search term or clear the role filter."
          actionLabel="Reset filters"
          onAction={() => {
            setQuery("");
            setRole("All");
          }}
        />
      )}
    </>
  );
}
