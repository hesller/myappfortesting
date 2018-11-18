package com.myappfortesting;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        mReactInstanceManager = ReactInstanceManager.builder()
                // ...
                // Add CodePush package
                .addPackage(new CodePush("a823PWaAZVVGMwhE71iMqDhyzVlZ0e8f4a9f-1405-45c4-9c49-33ac84907313", getApplicationContext(), BuildConfig.DEBUG))
                // Get the JS Bundle File via CodePush
                .setJSBundleFile(CodePush.getJSBundleFile())
                // ...
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);
        setContentView(mReactRootView);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyAppForTesting";
    }
}
