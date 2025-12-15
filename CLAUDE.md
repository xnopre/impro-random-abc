# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple web application for displaying alphabet letters in random order. The application is designed as an educational/improvisation tool where users can click through randomly ordered letters displayed in large format.

## Project Specifications

The full specifications are documented in SPECS.md (in French):
- Welcome screen with a "Démarrer" (Start) button
- After clicking start, display alphabet letters in random order
- Letters should be displayed very large, nearly full-screen
- Click anywhere to advance to the next letter
- After the last letter, display "The end" with a "Recommencer" (Restart) button

## Current State

This is an early-stage project with only specifications defined. No implementation has been created yet.

## Implementation Approach

This project uses **vanilla HTML/CSS/JavaScript** for maximum simplicity:
- Single HTML file that can be opened directly in a browser
- No build process or dependencies required
- Inline CSS and JavaScript (or separate files if preferred)

## Core Logic

When implementing:
- Use Fisher-Yates shuffle algorithm for randomizing the alphabet
- Manage three states: welcome screen, letter display, end screen
- Handle click events on the entire viewport for navigation
- Store current letter index to track progression through the alphabet
