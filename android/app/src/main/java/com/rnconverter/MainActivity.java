package com.rnconverter;


import android.view.View;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
    @Override
    public View createSplashLayout() {
        return new View(this);
    }
}
