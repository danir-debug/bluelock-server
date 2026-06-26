# BlueLock Browser APK Build Guide

## Prerequisites

Before building the APK, ensure you have:

1. **Node.js & npm** installed
   - Download from https://nodejs.org/

2. **Java Development Kit (JDK)** installed
   - Download from https://www.oracle.com/java/technologies/downloads/
   - Set `JAVA_HOME` environment variable

3. **Android SDK** installed
   - Download from https://developer.android.com/studio
   - Set `ANDROID_HOME` environment variable
   - Ensure you have Android SDK version 33 (API Level 33) or higher installed

4. **Gradle** (comes with Android Studio, or install separately)

## Setup Steps

### 1. Install Cordova globally

```bash
npm install -g cordova
```

### 2. Navigate to the cordova directory

```bash
cd cordova
```

### 3. Install dependencies

```bash
npm install
```

### 4. Prepare the Android platform

```bash
cordova prepare android
```

## Building the APK

### Development APK (Debug Build)

```bash
cordova build android
```

The debug APK will be located at:
```
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Release APK (Production Build)

```bash
cordova build android --release
```

The release APK will be located at:
```
platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
```

**Note:** For release builds, you'll need to sign the APK with your private key.

## Running on Device/Emulator

To run the app on a connected Android device or emulator:

```bash
cordova run android
```

## Troubleshooting

### Build Fails with "SDK not found"
- Set the `ANDROID_HOME` environment variable to your Android SDK installation path
- On Windows: `set ANDROID_HOME=C:\Users\YourUsername\AppData\Local\Android\Sdk`
- On macOS/Linux: `export ANDROID_HOME=~/Library/Android/sdk`

### Build Fails with "Java not found"
- Set the `JAVA_HOME` environment variable to your JDK installation path
- On Windows: `set JAVA_HOME=C:\Program Files\Java\jdk-17`
- On macOS/Linux: `export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home`

### Gradle Daemon Issues
```bash
./gradlew --stop
```

### Clean Build

```bash
cordova clean
cordova prepare android
cordova build android
```

## Configuration

To modify app settings, edit `config.xml`:

- **App Name:** Change the `<name>` tag
- **Package ID:** Change the `id` attribute in the `<widget>` tag
- **Version:** Change the `version` attribute in the `<widget>` tag
- **Minimum SDK Version:** Change `android-minSdkVersion` preference
- **Target SDK Version:** Change `android-targetSdkVersion` preference

## Next Steps

1. Test the APK on your device or emulator
2. For release to Google Play Store, sign the APK and follow Play Store submission guidelines
3. Consider adding app icons and splash screens for a professional appearance

## Support

For more information, visit:
- [Cordova Documentation](https://cordova.apache.org/docs/en/latest/)
- [Android Developer Guide](https://developer.android.com/guide)