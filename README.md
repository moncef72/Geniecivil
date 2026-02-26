# MBCC - Deployment Guide

This project is ready to be deployed to **Vercel**.

## Prerequisites

1.  A [Vercel](https://vercel.com) account.
2.  The [Vercel CLI](https://vercel.com/download) installed (optional, you can also deploy via GitHub).

## Environment Variables

You **must** set the following environment variable in your Vercel project dashboard:

-   `GEMINI_API_KEY`: Your Google Gemini API key.

## Deployment Steps

### Option 1: Via Vercel Dashboard (Recommended)

1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Vite configuration.
4.  Add the `GEMINI_API_KEY` in the **Environment Variables** section.
5.  Click **Deploy**.

### Option 2: Via Vercel CLI

1.  Run `vercel` in the root directory.
2.  Follow the prompts to link the project.
3.  Add the environment variable when prompted or via the dashboard.
4.  Run `vercel --prod` for the final deployment.

## Configuration Details

-   **Build Command:** `npm run build`
-   **Output Directory:** `dist`
-   **Framework Preset:** Vite
