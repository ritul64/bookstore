# 🤟 Sign Language Recognition System

A real-time American Sign Language (ASL) gesture-to-text translation system built with deep learning and computer vision. Designed to improve accessibility for individuals with hearing and speech impairments.

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python) ![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange?logo=tensorflow) ![OpenCV](https://img.shields.io/badge/OpenCV-4.x-green?logo=opencv) ![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🎯 Overview

This system captures hand gestures in real-time via webcam, classifies them using a fine-tuned MobileNetV2 CNN, and displays the corresponding text character — all within **200ms response time**. A Tkinter-based GUI makes the experience interactive and user-friendly.

---

## ✨ Features

- **Real-time gesture recognition** via webcam with sub-200ms latency
- **94% classification accuracy** using MobileNetV2 transfer learning
- **Interactive Tkinter GUI** for live gesture-to-text conversion
- **Custom dataset pipeline** — data collection, preprocessing, and augmentation scripts included
- Modular codebase: separate scripts for data collection, training, and inference

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Deep Learning | TensorFlow / Keras, MobileNetV2 |
| Computer Vision | OpenCV |
| GUI | Tkinter |
| Data Processing | NumPy, Pandas |
| Language | Python 3.8+ |

---

## 📁 Project Structure

```
sign-language-recognition/
│
├── collect_data.py      # Webcam-based gesture dataset collection tool
├── train.py             # Model training script (MobileNetV2 fine-tuning)
├── testing.py           # Model evaluation and accuracy testing
├── final_gui.py         # Real-time inference with Tkinter GUI
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

```bash
pip install tensorflow opencv-python numpy pandas pillow
```

### 1. Collect Training Data

```bash
python collect_data.py
```
Follow the on-screen prompts to capture gesture images for each ASL class.

### 2. Train the Model

```bash
python train.py
```
This fine-tunes MobileNetV2 on your collected dataset and saves the trained model.

### 3. Test the Model

```bash
python testing.py
```
Evaluates accuracy on the test set and prints a classification report.

### 4. Run Real-Time GUI

```bash
python final_gui.py
```
Opens the webcam feed with live gesture-to-text output.

---

## 📊 Model Performance

| Metric | Value |
|--------|-------|
| Classification Accuracy | **94%** |
| Average Response Time | **< 200ms** |
| Architecture | MobileNetV2 (Transfer Learning) |

---

## 🔮 Future Improvements

- [ ] Expand to full ASL word recognition (beyond individual letters)
- [ ] Add text-to-speech output
- [ ] Deploy as a web app using Flask or Streamlit
- [ ] Support for multiple sign language systems (ISL, BSL)

---

## 👤 Author

**Ritul Pandey**
- GitHub: [@ritul64](https://github.com/ritul64)
- Email: ritulpandey100@gmail.com
