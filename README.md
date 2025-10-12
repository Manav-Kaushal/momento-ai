# 🪞 Momento AI — AI-Powered Journaling App

Momento AI is an intelligent journaling app built with **React Native**, **Expo**, and **OpenAI GPT**.  
It helps users reflect, write, and grow through guided AI conversations, mood tracking, and personalized prompts — all wrapped in a calm, elegant design.

---

## ✨ Features

### 🧠 Core Functionality
- **AI Therapist Chat** — Analyze your journal history and get meaningful insights powered by OpenAI.
- **Daily Prompts** — Admin-managed writing prompts with weighted random selection.
- **Rich Journal Entries** — Add moods, categories, and images for deeper self-reflection.
- **AI Insights** — Automatically detect emotional patterns and themes over time.
- **Subscriptions** — Free and Pro plans with Stripe-powered billing.
- **Authentication** — Secure Google OAuth and email sign-up with Clerk.
- **Cross-Platform** — Works seamlessly on **iOS**, **Android**, and **Web**.

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|--------|
| **Frontend** | React Native (Expo SDK 54), React 19 |
| **UI Library** | Tamagui |
| **CMS** | Sanity.io (Custom Schemas + GROQ Queries) |
| **Auth & Billing** | Clerk + Stripe |
| **AI Integration** | OpenAI GPT (Pro-Feature Gated) |
| **Backend** | Vercel AI SDK for real-time streaming |
| **State Management** | Context API + Custom Hooks |
| **Deployment** | Expo + Vercel |

---

## ⚙️ Advanced Concepts

- **AI Tool Calling** — Fetch and analyze entries by mood, date, or topic.
- **Feature Gating** — Unlock premium features for Pro subscribers.
- **Edge Functions** — Serverless routes for fast API responses.
- **Sanity Studio Admin** — Manage prompts, entries, and categories.
- **Real-Time Streaming** — Smooth AI responses with visual feedback.

---

## 🧩 Project Structure

```
momento-ai/
├── app/
│   ├── components/
│   ├── screens/
│   ├── hooks/
│   └── context/
├── sanity/
│   ├── schemas/
│   └── deskStructure.js
├── server/
│   ├── routes/
│   ├── utils/
│   └── api/
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/momento-ai.git
cd momento-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root:

```bash
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
OPENAI_API_KEY=your_key
SANITY_PROJECT_ID=your_id
STRIPE_SECRET_KEY=your_key
```

### 4. Run the app
```bash
npx expo start
```

---

## 📦 Deployment

| Platform | Method |
|-----------|---------|
| **Mobile (iOS/Android)** | Expo EAS Build |
| **Web Dashboard** | Vercel (for billing and admin) |

---

## 🔐 Security

- **Clerk** handles authentication and session management.  
- **Stripe** processes payments and subscriptions securely.  
- **Sanity** provides role-based access for admin content.  
- Environment variables are never committed to version control.

---

## 🧠 Learning & Inspiration

This project is based on the **PapaReact AI Journal App tutorial** by [Sonny Sangha](https://www.youtube.com/@SonnySangha).  
Part of the **Zero to Full Stack Hero** ecosystem — a great resource for developers learning React Native and AI integrations.

📺 Watch the tutorial: [YouTube — Build an AI Journal App](https://www.youtube.com/watch?v=3fhgt6BKMZA)

---

## 💡 Future Improvements
- Add offline journal support with local storage sync.
- Expand analytics dashboard for mood trends.
- Introduce multilingual AI journaling.
- Implement voice input and summary playback.

---

## 🪄 License

**MIT License** © 2025 Momento AI  
Built with ❤️ for mindful creators and learners.
