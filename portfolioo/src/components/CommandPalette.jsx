import React, { useState, useEffect, useRef, useCallback } from "react";
import "./CommandPalette.css";

const COMMANDS = [
  {
    id: "projects",
    cmd: "/projects",
    label: "View Projects",
    desc: "Bugnova · FunBrain · Chat App · Portfolio",
    icon: "bx-code-block",
    action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "skills",
    cmd: "/skills",
    label: "Tech Stack",
    desc: "React · Node · NestJS · AWS · PostgreSQL",
    icon: "bx-chip",
    action: () => document.querySelector("#stack")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "experience",
    cmd: "/experience",
    label: "Experience & Education",
    desc: "RemoteBricks · AIT · Certifications",
    icon: "bx-briefcase",
    action: () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "contact",
    cmd: "/contact",
    label: "Get in Touch",
    desc: "Send a message or connect on LinkedIn",
    icon: "bx-send",
    action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "resume",
    cmd: "/resume",
    label: "Download Resume",
    desc: "PDF · Google Drive",
    icon: "bx-download",
    action: () => {
      window.open(
        "https://drive.google.com/uc?export=download&id=1VJQcVK5nq3Oln3sJtTWvazzngR_nmQhZ",
        "_blank"
      );
    },
  },
  {
    id: "snapshot",
    cmd: "/snapshot",
    label: "Recruiter Snapshot",
    desc: "Quick 15-second profile overview",
    icon: "bx-user-check",
    action: () => document.querySelector("#snapshot")?.scrollIntoView({ behavior: "smooth" }),
  },
];

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.cmd.includes(query.toLowerCase()) ||
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (cmd) => {
      cmd.action();
      onClose();
      setQuery("");
      setSelected(0);
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && filtered[selected]) {
        execute(filtered[selected]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selected, execute, onClose]);

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="cmd-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="cmd-palette"
        onClick={(e) => e.stopPropagation()}
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
      >
        {/* Header */}
        <div className="cmd-header">
          <div className="cmd-input-wrap">
            <i className="bx bx-terminal cmd-icon" aria-hidden="true"></i>
            <input
              ref={inputRef}
              className="cmd-input"
              type="text"
              placeholder="Type a command or search... (try /projects)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelected(0);
              }}
              aria-label="Command search"
              aria-autocomplete="list"
              aria-controls="cmd-list"
            />
            {query && (
              <button
                className="cmd-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <i className="bx bx-x"></i>
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <ul
          className="cmd-list"
          id="cmd-list"
          role="listbox"
          ref={listRef}
          aria-label="Commands"
        >
          {filtered.length === 0 ? (
            <li className="cmd-empty" role="option" aria-selected="false">
              <i className="bx bx-search-alt" aria-hidden="true"></i>
              No commands found
            </li>
          ) : (
            filtered.map((cmd, i) => (
              <li
                key={cmd.id}
                role="option"
                aria-selected={i === selected}
                className={`cmd-item${i === selected ? " cmd-item--selected" : ""}`}
                onClick={() => execute(cmd)}
                onMouseEnter={() => setSelected(i)}
              >
                <div className="cmd-item-icon">
                  <i className={`bx ${cmd.icon}`} aria-hidden="true"></i>
                </div>
                <div className="cmd-item-text">
                  <span className="cmd-item-label">{cmd.label}</span>
                  <span className="cmd-item-desc">{cmd.desc}</span>
                </div>
                <span className="cmd-item-cmd">{cmd.cmd}</span>
                {i === selected && (
                  <span className="cmd-item-enter" aria-hidden="true">↵</span>
                )}
              </li>
            ))
          )}
        </ul>

        {/* Footer */}
        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
