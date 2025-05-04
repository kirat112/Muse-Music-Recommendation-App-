# 🎵 Muse - Music Recommendation App

Muse is a music recommendation app powered by the **Spotify Web API**. It offers personalized music recommendations based on **mood**, **genre**, **artist**, and also provides options to **create custom playlists**. The app integrates directly with Spotify, giving you access to your **top songs**, **liked albums**, **most listened artists**, and more!

> 🚨 Note: Due to Spotify's onboarding restrictions, you’ll need to [create your own Spotify Web App](#getting-started) and use your personal API keys to run this project.

---

## 📸 Screenshots

| Login with Spotify | Home Page |
|--------------------|-----------|
| ![Screenshot 2025-04-26 000316](https://github.com/user-attachments/assets/c3d951ca-e75a-4448-b213-d579e984a703) | ![Screenshot 2025-04-26 000333](https://github.com/user-attachments/assets/9a9e72eb-6046-4502-be98-a50e2dcc3306)

| Recommendations Overview | 
|---------------------------|
| ![Screenshot 2025-04-26 000421](https://github.com/user-attachments/assets/45f7ba22-3c19-48ab-8d8e-93ba8212485b) |

| Mood Based | Genre Based |
|------------|--------------|
| ![Screenshot 2025-04-26 000442](https://github.com/user-attachments/assets/cf69a123-8f1a-44b9-9d81-05df4a257844)  ![Screenshot 2025-04-26 000511](https://github.com/user-attachments/assets/7c9c98d4-cc88-475d-8eaf-3a8eadd4f922) | ![Screenshot 2025-04-26 000544](https://github.com/user-attachments/assets/60c223fb-857f-44f1-b474-e196a17b8dd2)  ![Screenshot 2025-04-26 000645](https://github.com/user-attachments/assets/b46e224c-25f2-4778-8b6e-a0e24ca59dbf)



| Artist Search | Artist Based  | Create Playlist |
|--------------|----------------|------------------|
| ![Screenshot 2025-04-26 000718](https://github.com/user-attachments/assets/5ec55a4c-32ae-4298-889b-a51bb9e8acbf) | ![Screenshot 2025-04-26 000740](https://github.com/user-attachments/assets/8a931b39-c960-4475-84e6-c8ae6239c8c1) | ![Screenshot 2025-04-26 000851](https://github.com/user-attachments/assets/4fc81af0-6177-44c0-97d7-a5550a361f08)


---

## ✨ Features

- 🔐 **Spotify Login** – OAuth-based secure login using Spotify.
- 🏠 **Home Page** – Quick access to:
  - 🎵 Top Songs
  - ❤️ Liked Albums
  - 🔁 Most Listened Artists
  - 🎧 Your Playlists

- 🎯 **Recommendation System**:
  - 😄 Mood-Based (Happy, Sad, In Love, Angry, etc.)
  - 🎼 Genre-Based (Bollywood, Rock, Pop, HipHop, Indie, Acoustic, etc.)
  - 👤 Artist-Based – Select from top artists or search your favorite using a real-time dropdown search.

- 📀 **Create Playlist** – Generate a new playlist based on selected genre with custom name, description, and number of songs.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Spotify Web API
- **Auth**: Spotify OAuth 2.0

---

## 🛠️ Getting Started

To run this app locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kirat112/Muse-Music-Recommendation-App-.git
   cd Muse-Music-Recommendation-App-
