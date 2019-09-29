myApp.factory("httpService", [
  "$http",
  "$q",
  function($http, $q) {
    var daysToSubtract = 7;

    return {
      getNewestQuestions: function() {
        /* return $q.when({
            data: {"items":[{"tags":["java","android","android-studio","listview"],"owner":{"reputation":12,"user_id":7486765,"user_type":"registered","profile_image":"https://i.stack.imgur.com/1au5j.jpg?s=128&g=1","display_name":"Muhammad Imran","link":"https://stackoverflow.com/users/7486765/muhammad-imran"},"is_answered":false,"view_count":8,"answer_count":1,"score":-1,"last_activity_date":1569761576,"creation_date":1569761282,"question_id":58155338,"link":"https://stackoverflow.com/questions/58155338/java-android-total-installed-apps-not-showing-on-listview","title":"Java Android: Total installed apps not showing on listview"},{"tags":["android"],"owner":{"reputation":15,"user_id":11108625,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/0e143c15adc451f4942f784893c0cfd9?s=128&d=identicon&r=PG&f=1","display_name":"Rick","link":"https://stackoverflow.com/users/11108625/rick"},"is_answered":false,"view_count":8,"answer_count":0,"score":-1,"last_activity_date":1569761011,"creation_date":1569761011,"question_id":58155309,"link":"https://stackoverflow.com/questions/58155309/show-a-list-of-all-unsaved-unknown-phone-numbers-from-call-log-in-android-studio","title":"Show a list of all unsaved/unknown phone numbers from call log in Android Studio"},{"tags":["android","android-layout","android-webview","android-toolbar"],"owner":{"reputation":489,"user_id":1840040,"user_type":"registered","accept_rate":31,"profile_image":"https://www.gravatar.com/avatar/f4095825957ea079465c27703602dc35?s=128&d=identicon&r=PG","display_name":"John Smith","link":"https://stackoverflow.com/users/1840040/john-smith"},"is_answered":false,"view_count":7,"answer_count":0,"score":0,"last_activity_date":1569760550,"creation_date":1569760550,"question_id":58155256,"link":"https://stackoverflow.com/questions/58155256/adjust-toolbar-color-based-on-website-displayed-in-webview","title":"Adjust toolbar color based on website displayed in webview"},{"tags":["java","android"],"owner":{"reputation":1,"user_id":12136633,"user_type":"registered","profile_image":"https://graph.facebook.com/3009269149087695/picture?type=large","display_name":"Francesco Sparano","link":"https://stackoverflow.com/users/12136633/francesco-sparano"},"is_answered":false,"view_count":17,"answer_count":1,"score":0,"last_activity_date":1569761406,"creation_date":1569760475,"question_id":58155251,"link":"https://stackoverflow.com/questions/58155251/alarmmanager-doesnt-work-when-app-is-closed","title":"AlarmManager Doesn&#39;t work when app is closed"},{"tags":["android","react-native","expo"],"owner":{"reputation":84,"user_id":10426052,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/163f57fcf9ec8eb142222cd06a26cb5a?s=128&d=identicon&r=PG","display_name":"Baterka","link":"https://stackoverflow.com/users/10426052/baterka"},"is_answered":false,"view_count":10,"answer_count":0,"score":0,"last_activity_date":1569759978,"creation_date":1569759978,"question_id":58155199,"link":"https://stackoverflow.com/questions/58155199/expo-react-native-app-how-to-open-native-camera-how-to-pick-multiple-images","title":"Expo React Native App - How to open native camera + How to pick multiple images from native gallery"},{"tags":["android","android-architecture-navigation","android-navigation-graph"],"owner":{"reputation":18,"user_id":11181538,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/7859eec4895b02e83cc48a7202dcc3ec?s=128&d=identicon&r=PG&f=1","display_name":"xblaz3kx","link":"https://stackoverflow.com/users/11181538/xblaz3kx"},"is_answered":false,"view_count":7,"answer_count":0,"score":0,"last_activity_date":1569760736,"creation_date":1569759970,"last_edit_date":1569760736,"question_id":58155195,"link":"https://stackoverflow.com/questions/58155195/navcontroller-destination-unknown-using-bottomnavigation","title":"NavController destination unknown using BottomNavigation"},{"tags":["java","android","screen-rotation"],"owner":{"reputation":147,"user_id":4158832,"user_type":"registered","accept_rate":60,"profile_image":"https://www.gravatar.com/avatar/1aabe5cc5732341519af6f86544268ef?s=128&d=identicon&r=PG&f=1","display_name":"ali73","link":"https://stackoverflow.com/users/4158832/ali73"},"is_answered":false,"view_count":8,"answer_count":0,"score":0,"last_activity_date":1569759777,"creation_date":1569759777,"question_id":58155167,"link":"https://stackoverflow.com/questions/58155167/android-activity-androidscreenorientation-fullsensor-wont-change-orientat","title":"Android activity ` android:screenOrientation=&quot;fullSensor&quot;` won&#39;t change orientation"},{"tags":["android","android-livedata","android-viewmodel"],"owner":{"reputation":5015,"user_id":1315447,"user_type":"registered","accept_rate":76,"profile_image":"https://i.stack.imgur.com/6YH8k.jpg?s=128&g=1","display_name":"Ali","link":"https://stackoverflow.com/users/1315447/ali"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1569759554,"creation_date":1569759554,"question_id":58155145,"link":"https://stackoverflow.com/questions/58155145/wrapper-class-for-livedata","title":"Wrapper class for LiveData"},{"tags":["java","android","android-studio","android-fragments","kotlin"],"owner":{"reputation":1,"user_id":10539782,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-3xtDuwZ4Erw/AAAAAAAAAAI/AAAAAAAAAEU/ncTYMfHVusQ/photo.jpg?sz=128","display_name":"Eddie Sharp","link":"https://stackoverflow.com/users/10539782/eddie-sharp"},"is_answered":false,"view_count":6,"answer_count":0,"score":0,"last_activity_date":1569759421,"creation_date":1569759421,"question_id":58155132,"link":"https://stackoverflow.com/questions/58155132/kotlin-viewpager2-class-screenslidepageradapter-is-not-abstract-and-does-not","title":"Kotlin ViewPager2: Class &#39;ScreenSlidePagerAdapter&#39; is not abstract and does not implement base class member"},{"tags":["javascript","android","mobile","whatsapp"],"owner":{"reputation":30,"user_id":3279662,"user_type":"registered","profile_image":"https://graph.facebook.com/1222393414/picture?type=large","display_name":"Ngoni X","link":"https://stackoverflow.com/users/3279662/ngoni-x"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1569759319,"creation_date":1569759319,"question_id":58155110,"link":"https://stackoverflow.com/questions/58155110/prevent-copying-and-pasting-messages-on-whatsapp","title":"Prevent copying and pasting messages on Whatsapp"}],"has_more":true,"quota_max":300,"quota_remaining":296}
        }); */
        var newestQuestionsUrl =
          "https://api.stackexchange.com/questions?site=stackoverflow&tagged=android&sort=creation&order=desc&page=1&pagesize=10";
        return $http.get(newestQuestionsUrl);
      },
      getMostVotedQuestions: function() {
          /* return $q.when({
            data: {"items":[{"tags":["android","ubuntu","emulation"],"owner":{"reputation":300,"user_id":1433387,"user_type":"registered","accept_rate":40,"profile_image":"https://www.gravatar.com/avatar/a37d86b7d709785662decc035368ad8e?s=128&d=identicon&r=PG","display_name":"Andrew","link":"https://stackoverflow.com/users/1433387/andrew"},"is_answered":false,"view_count":608,"answer_count":1,"score":9,"last_activity_date":1569611555,"creation_date":1569421120,"question_id":58100546,"link":"https://stackoverflow.com/questions/58100546/cannot-create-platform-opengl-context","title":"Cannot create platform OpenGL context"},{"tags":["android","firebase","firebase-app-distribution"],"owner":{"reputation":469,"user_id":3811983,"user_type":"registered","profile_image":"https://i.stack.imgur.com/Aam84.png?s=128&g=1","display_name":"Mayank Mohan Upadhyay","link":"https://stackoverflow.com/users/3811983/mayank-mohan-upadhyay"},"is_answered":false,"view_count":68,"answer_count":0,"score":5,"last_activity_date":1569565515,"creation_date":1569564325,"last_edit_date":1569565515,"question_id":58128674,"link":"https://stackoverflow.com/questions/58128674/using-firebase-app-distribution-service-is-resulting-in-app-not-installed-error","title":"Using Firebase App Distribution service is resulting in app not installed error"},{"tags":["android","kotlin","syntax","kotlin-when"],"owner":{"reputation":461,"user_id":8258872,"user_type":"registered","accept_rate":50,"profile_image":"https://www.gravatar.com/avatar/cadd7ad672077a70380fee38537939cb?s=128&d=identicon&r=PG&f=1","display_name":"ColonD","link":"https://stackoverflow.com/users/8258872/colond"},"is_answered":true,"view_count":68,"accepted_answer_id":58092898,"answer_count":2,"score":4,"last_activity_date":1569399991,"creation_date":1569395023,"last_edit_date":1569399991,"question_id":58092805,"link":"https://stackoverflow.com/questions/58092805/calling-string-method-in-kotlin-when-block","title":"Calling String method in Kotlin when block"},{"tags":["java","android","phone-number","telephonymanager","android-subscriptionmanager"],"owner":{"reputation":186,"user_id":6874315,"user_type":"registered","profile_image":"https://graph.facebook.com/1262027960508376/picture?type=large","display_name":"Huzaifa Asif","link":"https://stackoverflow.com/users/6874315/huzaifa-asif"},"is_answered":true,"view_count":72,"accepted_answer_id":58128660,"answer_count":4,"score":4,"last_activity_date":1569564653,"creation_date":1569563651,"last_edit_date":1569564653,"question_id":58128546,"link":"https://stackoverflow.com/questions/58128546/how-to-get-the-mobile-number-of-my-device-programmatically","title":"How to get the mobile number of my device programmatically?"},{"tags":["android","react-native","react-navigation","deep-linking"],"owner":{"reputation":172,"user_id":8678385,"user_type":"registered","profile_image":"https://i.stack.imgur.com/WNPWj.jpg?s=128&g=1","display_name":"A.Najafi","link":"https://stackoverflow.com/users/8678385/a-najafi"},"is_answered":true,"view_count":72,"accepted_answer_id":58092074,"answer_count":2,"score":4,"last_activity_date":1569391737,"creation_date":1569321584,"last_edit_date":1569323754,"question_id":58078447,"link":"https://stackoverflow.com/questions/58078447/deeplinking-work-but-no-navigate-to-intended-screen-using-react-navigation","title":"DeepLinking work but no navigate to Intended Screen using react navigation"},{"tags":["android","android-webview"],"owner":{"reputation":39,"user_id":8957784,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/7d54bd4736ec7ba180002d3eb281c483?s=128&d=identicon&r=PG&f=1","display_name":"Rares Serban","link":"https://stackoverflow.com/users/8957784/rares-serban"},"is_answered":true,"view_count":48,"answer_count":1,"score":4,"last_activity_date":1569573362,"creation_date":1569177934,"last_edit_date":1569563901,"question_id":58052403,"link":"https://stackoverflow.com/questions/58052403/crash-on-api-21-and-22-only-webview-and-consent-sdk-resourcesnotfoundexcepti","title":"Crash on API 21 and 22 only, WebView and Consent SDK - Resources$NotFoundException"},{"tags":["java","android"],"owner":{"reputation":17395,"user_id":72437,"user_type":"registered","accept_rate":86,"profile_image":"https://i.stack.imgur.com/ay0Dg.jpg?s=128&g=1","display_name":"Cheok Yan Cheng","link":"https://stackoverflow.com/users/72437/cheok-yan-cheng"},"is_answered":false,"view_count":76,"answer_count":1,"score":4,"last_activity_date":1569328513,"creation_date":1569188876,"last_edit_date":1569192222,"question_id":58053650,"link":"https://stackoverflow.com/questions/58053650/how-to-make-android-base64-decode-reliable-throws-exception-or-returning-null","title":"How to make Android Base64.decode reliable throws exception (Or returning null) given an invalid base64 encoded string?"},{"tags":["android","android-databinding"],"owner":{"reputation":120,"user_id":1151424,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/1b6de09f64783731074c29b41aef8bae?s=128&d=identicon&r=PG","display_name":"Erik Sill&#233;n","link":"https://stackoverflow.com/users/1151424/erik-sill%c3%a9n"},"is_answered":false,"view_count":63,"answer_count":3,"score":4,"last_activity_date":1569500975,"creation_date":1569485457,"question_id":58112309,"link":"https://stackoverflow.com/questions/58112309/databinding-accessing-fields-in-included-layout-layout-is-cast-to-view","title":"Databinding: Accessing fields in included layout - layout is cast to view"},{"tags":["java","android","android-studio","drag-and-drop","android-animation"],"owner":{"reputation":18,"user_id":11698226,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-lO4s1-7N28w/AAAAAAAAAAI/AAAAAAAAAKg/xVk78Cpypj8/photo.jpg?sz=128","display_name":"stivmen","link":"https://stackoverflow.com/users/11698226/stivmen"},"is_answered":true,"view_count":43,"accepted_answer_id":58124039,"answer_count":1,"score":3,"last_activity_date":1569587687,"creation_date":1569525885,"last_edit_date":1569587687,"question_id":58123485,"link":"https://stackoverflow.com/questions/58123485/i-have-one-problem-with-animation-drag-and-drop","title":"i have one problem with animation drag and drop"},{"tags":["android","android-layout"],"owner":{"reputation":30,"user_id":10246652,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-n6W7f3k_2RM/AAAAAAAAAAI/AAAAAAAAEis/S795sN8JEGA/photo.jpg?sz=128","display_name":"Hritik Gupta","link":"https://stackoverflow.com/users/10246652/hritik-gupta"},"is_answered":true,"view_count":48,"answer_count":2,"score":3,"last_activity_date":1569228915,"creation_date":1569226619,"question_id":58058261,"link":"https://stackoverflow.com/questions/58058261/inflating-view-using-dialog-fragment","title":"Inflating View using Dialog Fragment"}],"has_more":true,"quota_max":300,"quota_remaining":297}
        }); */
        var toDate = Math.trunc(Date.now() / 1000);
        var fromDate = toDate - daysToSubtract * 24 * 60 * 60;
        var mostVotedQuestionsUrl =
          "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=android&sort=votes&fromdate=" +
          fromDate +
          "&todate=" +
          toDate +
          "&order=desc&page=1&pagesize=10";
        return $http.get(mostVotedQuestionsUrl);
      },
      getBountiedQuestions: function() {
          /* return $q.when({
            data: {"items":[{"tags":["android","android-layout","kotlin","android-gradle","android-motionlayout"],"owner":{"reputation":437,"user_id":6121671,"user_type":"registered","accept_rate":83,"profile_image":"https://i.stack.imgur.com/oEYZX.jpg?s=128&g=1","display_name":"GV_FiQst","link":"https://stackoverflow.com/users/6121671/gv-fiqst"},"is_answered":false,"view_count":62,"bounty_amount":50,"bounty_closes_date":1570202030,"answer_count":2,"score":0,"last_activity_date":1569749908,"creation_date":1569420780,"last_edit_date":1569598260,"question_id":58100447,"link":"https://stackoverflow.com/questions/58100447/use-motionlayout-and-constraintlayout-dependencies-with-different-versions","title":"Use MotionLayout and ConstraintLayout dependencies with different versions"},{"tags":["android","user-interface","subclass","android-framelayout","lib"],"owner":{"reputation":264,"user_id":2767662,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/aa50246b5f5923f90731f6df0ed744c4?s=128&d=identicon&r=PG&f=1","display_name":"Heinzlmaen","link":"https://stackoverflow.com/users/2767662/heinzlmaen"},"is_answered":true,"view_count":28,"bounty_amount":50,"bounty_closes_date":1570294365,"answer_count":1,"score":0,"last_activity_date":1569705334,"creation_date":1569414252,"last_edit_date":1569418997,"question_id":58098308,"link":"https://stackoverflow.com/questions/58098308/how-to-access-sub-elements-of-a-custom-framelayout-in-a-library-project","title":"How to access sub elements of a custom FrameLayout in a library project?"},{"tags":["android","android-animation","android-tablayout"],"owner":{"reputation":33,"user_id":8255889,"user_type":"registered","profile_image":"https://i.stack.imgur.com/XIC1M.jpg?s=128&g=1","display_name":"Praveen","link":"https://stackoverflow.com/users/8255889/praveen"},"is_answered":false,"view_count":33,"bounty_amount":50,"bounty_closes_date":1570215750,"answer_count":1,"score":1,"last_activity_date":1569700361,"creation_date":1569344038,"question_id":58084965,"link":"https://stackoverflow.com/questions/58084965/smooth-animation-between-tabs-when-using-selector-android","title":"Smooth animation between tabs when using selector - Android"},{"tags":["c#","android","unity3d","shader","light"],"owner":{"reputation":1591,"user_id":4841380,"user_type":"registered","profile_image":"https://i.stack.imgur.com/FvOw1.jpg?s=128&g=1","display_name":"Dave","link":"https://stackoverflow.com/users/4841380/dave"},"is_answered":false,"view_count":57,"bounty_amount":50,"bounty_closes_date":1570287540,"answer_count":0,"score":1,"last_activity_date":1569682740,"creation_date":1569508582,"last_edit_date":1569508935,"question_id":58119217,"link":"https://stackoverflow.com/questions/58119217/surface-light-flickering-on-android-devices","title":"Surface light flickering on android devices"},{"tags":["android","android-layout","android-view","talkback","android-accessibility"],"owner":{"reputation":2569,"user_id":759042,"user_type":"registered","accept_rate":62,"profile_image":"https://www.gravatar.com/avatar/d15066c8d70752866771e90b9204536d?s=128&d=identicon&r=PG","display_name":"aha","link":"https://stackoverflow.com/users/759042/aha"},"is_answered":true,"view_count":35,"bounty_amount":100,"bounty_closes_date":1570260709,"answer_count":1,"score":1,"last_activity_date":1569675344,"creation_date":1569421508,"last_edit_date":1569675344,"question_id":58100682,"link":"https://stackoverflow.com/questions/58100682/change-reading-order-of-elements-within-a-focusable-viewgroup","title":"Change reading order of elements within a focusable ViewGroup"},{"tags":["android","sockets","ssl","ssl-certificate","tls1.2"],"owner":{"reputation":98,"user_id":10844401,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/e0b5598b690f8f2bdf47fdf74b917d11?s=128&d=identicon&r=PG","display_name":"user10844401","link":"https://stackoverflow.com/users/10844401/user10844401"},"is_answered":true,"view_count":87,"bounty_amount":100,"bounty_closes_date":1569956875,"accepted_answer_id":58087810,"answer_count":2,"score":1,"last_activity_date":1569670347,"creation_date":1569178579,"question_id":58052483,"link":"https://stackoverflow.com/questions/58052483/ssl-tls-connection-from-android-to-a-custom-socket-server","title":"SSL/TLS connection from android to a Custom Socket Server"},{"tags":["android","react-native","react-native-flatlist"],"owner":{"reputation":276,"user_id":7978635,"user_type":"registered","profile_image":"https://i.stack.imgur.com/bwzh5.jpg?s=128&g=1","display_name":"Matin ZD","link":"https://stackoverflow.com/users/7978635/matin-zd"},"is_answered":false,"view_count":20,"bounty_amount":50,"bounty_closes_date":1570204279,"answer_count":1,"score":0,"last_activity_date":1569599479,"creation_date":1569419223,"question_id":58099908,"link":"https://stackoverflow.com/questions/58099908/flatlist-automatically-scrolls-to-first-when-data-is-too-large-in-horizontal-mod","title":"FlatList automatically scrolls to first when data is too large in horizontal mode (RTL)"},{"tags":["android","arm","arcore","mali"],"owner":{"reputation":490,"user_id":222262,"user_type":"registered","accept_rate":85,"profile_image":"https://www.gravatar.com/avatar/4b6bb3bffc982bc3211e9d3b998043c5?s=128&d=identicon&r=PG","display_name":"Simplex","link":"https://stackoverflow.com/users/222262/simplex"},"is_answered":false,"view_count":33,"bounty_amount":50,"bounty_closes_date":1570004148,"answer_count":0,"score":0,"last_activity_date":1569399770,"creation_date":1569226360,"last_edit_date":1569399770,"question_id":58058186,"link":"https://stackoverflow.com/questions/58058186/why-does-arcore-raise-fatal-error-with-arm-graphics-analyzer-integration","title":"Why does ARCore raise fatal error with ARM Graphics Analyzer integration?"}],"has_more":false,"quota_max":300,"quota_remaining":298}
        }); */
        var toDate = Math.trunc(Date.now() / 1000);
        var fromDate = toDate - daysToSubtract * 24 * 60 * 60;
        var bountiedQuestionsUrl =
          "https://api.stackexchange.com/2.2/questions/featured?site=stackoverflow&tagged=android&fromdate=" +
          fromDate +
          "&todate=" +
          toDate +
          "&sort=activity&order=desc";
        return $http.get(bountiedQuestionsUrl);
      },
      getQuestion: function(questionId) {
        /* return $q.when({
            data: {"items":[{"tags":["android","react-native","camera","expo"],"owner":{"reputation":84,"user_id":10426052,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/163f57fcf9ec8eb142222cd06a26cb5a?s=128&d=identicon&r=PG","display_name":"Baterka","link":"https://stackoverflow.com/users/10426052/baterka"},"is_answered":false,"view_count":8,"answer_count":0,"score":0,"last_activity_date":1569763640,"creation_date":1569763640,"question_id":58155671,"link":"https://stackoverflow.com/questions/58155671/takepictureasync-of-expos-camera-returns-nothing-promise-never-fulfilled","title":"takePictureAsync of Expo&#39;s Camera returns nothing. (Promise never fulfilled)","body":"<p>I started using <code>Camera</code> from Expo for React Native (<a href=\"https://docs.expo.io/versions/v35.0.0/sdk/camera/\" rel=\"nofollow noreferrer\">https://docs.expo.io/versions/v35.0.0/sdk/camera/</a>)</p>\n\n<p>I see camera window but when I call <code>await this.camera.takePictureAsync();</code> the Promise is never finished and I get no output.</p>\n\n<p>My camera:</p>\n\n<pre><code>&lt;Camera ref={(camera) =&gt; this.camera = camera}\n  style={{flex: 1}}\n  type={this.state.type}\n&gt;\n  &lt;Button onPress={() =&gt; this.snap()} title='SNAP'/&gt;\n&lt;/Camera&gt;\n</code></pre>\n\n<p>Snap function:</p>\n\n<pre><code>snap = async () =&gt; {\n  if (this.camera) {\n      console.log(\"SNAP!\");\n      let photo = await this.camera.takePictureAsync();\n      console.log(photo);\n  }\n};\n</code></pre>\n\n<p>The <code>SNAP!</code> is shown in console so there is no problem with camera itself. Second <code>console.log</code> is never called.</p>\n\n<p>I am testing my app on Android 9 (Real device)</p>\n\n<p><strong>EDIT: It is working on emulator, so there must be problem specifically with the real device</strong> </p>\n"}],"has_more":false,"quota_max":300,"quota_remaining":284}
        }); */
        var questionUrl =
          "https://api.stackexchange.com/2.2/questions/" +
          questionId +
          "?site=stackoverflow&filter=withbody";
        return $http.get(questionUrl);
      },
      getAnswers: function(questionId) {
        /* return $q.when({
            data: {"items":[{"owner":{"reputation":40129,"user_id":7666442,"user_type":"registered","profile_image":"https://i.stack.imgur.com/K8FFo.jpg?s=128&g=1","display_name":"Nilesh Rathod","link":"https://stackoverflow.com/users/7666442/nilesh-rathod"},"is_accepted":true,"score":5,"last_activity_date":1569395356,"creation_date":1569395356,"answer_id":58092898,"question_id":58092805,"body":"<p>You can use <a href=\"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/with.html\" rel=\"noreferrer\"><code>with</code></a> </p>\n\n<p>Try this way</p>\n\n<pre><code>    with(foo) {\n        when {\n            equals(\"SOMETHING\") -&gt; println(\"Case 1\")\n            equals(\"something\",false) -&gt; println(\"Case 2\")\n            contains(\"SUBSTRING\") -&gt; println(\"Case 3\")\n            contains(\"bar\") -&gt; println(\"Case 4\")\n            startsWith(\"foo\") -&gt; println(\"Case 5\")\n            else -&gt; println(\"else Case\")\n        }\n    } \n</code></pre>\n"},{"owner":{"reputation":71,"user_id":8388068,"user_type":"registered","profile_image":"https://i.stack.imgur.com/H5mU7.jpg?s=128&g=1","display_name":"Gulam","link":"https://stackoverflow.com/users/8388068/gulam"},"is_accepted":false,"score":0,"last_activity_date":1569396781,"creation_date":1569396781,"answer_id":58093340,"question_id":58092805,"body":"<p>try this:-</p>\n\n<pre><code> with(foo) {\n    when {\n        equals(\"SOMETHING\") -&gt; { //do stuff}\n        equals(\"something\",false) -&gt; { //do stuff}\n        contains(\"SUBSTRING\") -&gt; { //do stuff}\n        contains(\"bar\") -&gt; { //do stuff}\n        startsWith(\"foo\") -&gt; { //do stuff}\n        else -&gt; { //do stuff}\n    }\n} \n</code></pre>\n"}],"has_more":false,"quota_max":300,"quota_remaining":292}
        }); */
        var answersUrl =
          "https://api.stackexchange.com/2.2/questions/" +
          questionId +
          "/answers?site=stackoverflow&sort=votes&order=desc&filter=withbody";
        return $http.get(answersUrl);
      },
      getUnansweredQuestions: function() {
        /* return $q.when({
            data: {"items":[{"tags":["java","android","video-thumbnails"],"owner":{"reputation":10,"user_id":10568282,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-cQeIjZoQJx0/AAAAAAAAAAI/AAAAAAAAAA4/zD_6e8mCpvY/photo.jpg?sz=128","display_name":"Academy for Brilliance","link":"https://stackoverflow.com/users/10568282/academy-for-brilliance"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1569769194,"creation_date":1569769194,"question_id":58156394,"link":"https://stackoverflow.com/questions/58156394/when-i-upload-the-video-file-thumbnail-is-been-created-but-of-0-0b","title":"when i upload the video file thumbnail is been created but of 0.0B"},{"tags":["java","android","xml"],"owner":{"reputation":1,"user_id":8767402,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/4b11a0eab39a5ddbcb2804dc95c24084?s=128&d=identicon&r=PG","display_name":"user8767402","link":"https://stackoverflow.com/users/8767402/user8767402"},"is_answered":false,"view_count":7,"answer_count":0,"score":0,"last_activity_date":1569769027,"creation_date":1569769027,"question_id":58156369,"link":"https://stackoverflow.com/questions/58156369/menu-3-dots-are-not-showing","title":"Menu 3 dots are not showing"},{"tags":["java","android","textview","height","autosize"],"owner":{"reputation":25,"user_id":10305008,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-JUjdnTegqLc/AAAAAAAAAAI/AAAAAAAADsg/n0b4DlKg_4Y/photo.jpg?sz=128","display_name":"Muhammad Fadli Firdaus","link":"https://stackoverflow.com/users/10305008/muhammad-fadli-firdaus"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1569768968,"creation_date":1569768555,"last_edit_date":1569768968,"question_id":58156310,"link":"https://stackoverflow.com/questions/58156310/android-textview-text-going-out-of-bounds","title":"Android TextView text going out of bounds"},{"tags":["android","android-studio","compiler-errors","build.gradle","android-fileprovider"],"owner":{"reputation":9,"user_id":10003487,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/8d8835b77020c669ea1bb4f024c60378?s=128&d=identicon&r=PG&f=1","display_name":"Ishak Benaissa","link":"https://stackoverflow.com/users/10003487/ishak-benaissa"},"is_answered":false,"view_count":8,"answer_count":1,"score":0,"last_activity_date":1569769191,"creation_date":1569767956,"question_id":58156246,"link":"https://stackoverflow.com/questions/58156246/error-cannot-find-symbol-variable-fileprovider-package-android-support-v4-conten","title":"Error cannot find symbol variable FileProvider package android.support.v4.content does not exist"},{"tags":["android","kotlin","kotlin-android-extensions"],"owner":{"reputation":1,"user_id":11713633,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-bNhRD94xXBg/AAAAAAAAAAI/AAAAAAAAABw/p97DWSMmewk/photo.jpg?sz=128","display_name":"Muhammad Haiqal Dani","link":"https://stackoverflow.com/users/11713633/muhammad-haiqal-dani"},"is_answered":false,"view_count":8,"answer_count":0,"score":0,"last_activity_date":1569766667,"creation_date":1569766667,"question_id":58156076,"link":"https://stackoverflow.com/questions/58156076/how-to-take-photos-from-other-activty-on-imgphoto-on-kotlin","title":"How to take photos from other activty on imgPhoto on kotlin"},{"tags":["android","gradle","dagger"],"owner":{"reputation":317,"user_id":2997430,"user_type":"registered","accept_rate":54,"profile_image":"https://graph.facebook.com/100000059555044/picture?type=large","display_name":"Anton","link":"https://stackoverflow.com/users/2997430/anton"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1569767906,"creation_date":1569766617,"last_edit_date":1569767906,"question_id":58156070,"link":"https://stackoverflow.com/questions/58156070/duplicate-class-in-modules-dagger-1-2-2-jar-and-dagger-2-22-jar","title":"Duplicate class in modules dagger-1.2.2.jar and dagger-2.22.jar"},{"tags":["android"],"owner":{"reputation":3,"user_id":11839704,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/2cb5e8b341808e952acd272c5bd03707?s=128&d=identicon&r=PG&f=1","display_name":"Prashanth","link":"https://stackoverflow.com/users/11839704/prashanth"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1569766375,"creation_date":1569765804,"last_edit_date":1569766375,"question_id":58155965,"link":"https://stackoverflow.com/questions/58155965/while-build-the-android-msm8909-source-code-getting-error-like-below","title":"While build the android (msm8909) source code getting error like below"},{"tags":["java","android","user-interface"],"owner":{"reputation":16,"user_id":3114161,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/98c62fb2f83b086500d5dfda2dd2d2b1?s=128&d=identicon&r=PG&f=1","display_name":"mohammad","link":"https://stackoverflow.com/users/3114161/mohammad"},"is_answered":false,"view_count":18,"answer_count":0,"score":0,"last_activity_date":1569765450,"creation_date":1569765450,"question_id":58155923,"link":"https://stackoverflow.com/questions/58155923/how-can-i-close-the-status-bar-in-android","title":"How can I close the status bar in android?"},{"tags":["java","android","bitmap","image-compression"],"owner":{"reputation":440,"user_id":1724453,"user_type":"registered","accept_rate":69,"profile_image":"https://www.gravatar.com/avatar/22a46f15c5c6f6df8792abc256ec4ea9?s=128&d=identicon&r=PG","display_name":"Gissipi_453","link":"https://stackoverflow.com/users/1724453/gissipi-453"},"is_answered":false,"view_count":7,"answer_count":0,"score":0,"last_activity_date":1569765164,"creation_date":1569764860,"last_edit_date":1569765164,"question_id":58155843,"link":"https://stackoverflow.com/questions/58155843/bitmaps-calculate-insamplesize-correctly-for-existing-bitmaps","title":"Bitmaps: calculate inSampleSize correctly for existing Bitmaps"},{"tags":["android","react-native","camera","expo"],"owner":{"reputation":82,"user_id":10426052,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/163f57fcf9ec8eb142222cd06a26cb5a?s=128&d=identicon&r=PG","display_name":"Baterka","link":"https://stackoverflow.com/users/10426052/baterka"},"is_answered":false,"view_count":8,"answer_count":0,"score":0,"last_activity_date":1569763640,"creation_date":1569763640,"question_id":58100682,"link":"https://stackoverflow.com/questions/58155671/takepictureasync-of-expos-camera-returns-nothing-promise-never-fulfilled","title":"takePictureAsync of Expo&#39;s Camera returns nothing. (Promise never fulfilled)"}],"has_more":true,"quota_max":300,"quota_remaining":298}
        }); */
        var unansweredQuestionUrl =
          "https://api.stackexchange.com/2.2/questions/unanswered?site=stackoverflow&tagged=android&sort=creation&order=desc&page=1&pagesize=10";
        return $http.get(unansweredQuestionUrl);
      }
    };
  }
]);
