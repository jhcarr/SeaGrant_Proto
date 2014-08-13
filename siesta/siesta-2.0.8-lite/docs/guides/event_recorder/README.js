Ext.data.JsonP.event_recorder({"guide":"<h2 id='event_recorder-section-intro'>Intro</h2>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/event_recorder-section-intro'>Intro</a></li>\n<li><a href='#!/guide/event_recorder-section-what-is-the-event-recorder%3F'>What is the event recorder?</a></li>\n<li><a href='#!/guide/event_recorder-section-getting-started'>Getting started</a></li>\n<li><a href='#!/guide/event_recorder-section-the-event-recorder-interface'>The event recorder interface</a></li>\n<li><a href='#!/guide/event_recorder-section-editing-the-target-locator'>Editing the target locator</a></li>\n<li><a href='#!/guide/event_recorder-section-waiting-for-async-operations'>Waiting for async operations</a></li>\n<li><a href='#!/guide/event_recorder-section-the-function-step'>The function step</a></li>\n<li><a href='#!/guide/event_recorder-section-recording-a-move-cursor-to-step'>Recording a move-cursor-to step</a></li>\n<li><a href='#!/guide/event_recorder-section-buy-this-product'>Buy this product</a></li>\n<li><a href='#!/guide/event_recorder-section-support'>Support</a></li>\n<li><a href='#!/guide/event_recorder-section-see-also'>See also</a></li>\n<li><a href='#!/guide/event_recorder-section-copyright-and-license'>COPYRIGHT AND LICENSE</a></li>\n</ol>\n</div>\n\n<p>This guide shows how you to use the event recorder in Siesta.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder1.png\" alt=\"\" width=\"413\" height=\"302\"></p></p>\n\n<h2 id='event_recorder-section-what-is-the-event-recorder%3F'>What is the event recorder?</h2>\n\n<p>The event recorder will help you save lots of time as you author your UI tests for your application or UI components.\nAfter hitting the record button, it will record your interactions with the user interface and help you target the components in your application.\nThis means it will detect Sencha components such as grids, form fields and checkboxes etc. without you having to\nmanually type in each target in manually. Please note that the recorder will most likely <strong>not</strong> produce a perfect test case at once, in reality\nyou will need to tweak its output to be as stable as possible for your test scenario. Regardless, it'll definitely save you time!</p>\n\n<h2 id='event_recorder-section-getting-started'>Getting started</h2>\n\n<p>First of all you should prepare a test case which will produce the UI that you want the test to interact with.\nEither you load an HTML page from your application (using the  <a href=\"#!/api/Siesta.Harness.Browser-cfg-hostPageUrl\" rel=\"Siesta.Harness.Browser-cfg-hostPageUrl\" class=\"docClass\">hostPageUrl</a> config) or you create a test which creates and renders a UI component.\nAfter creating your test skeleton, run it and make sure the rendering completes without errors.</p>\n\n<p>At this point, your test skeleton produces the UI you want to start testing. Now you need to instruct the test to wait for a condition that proves the UI is ready to be\ninteracted with. This might be the presence of some CSS selector, or that a couple of Ext JS stores have been loaded. Below is a simple sample test\nskeleton:</p>\n\n<pre><code>StartTest(function (t) {\n\n    var customerGrid = new App.grid.Customer({\n        width    : 600,\n        height   : 200,\n        renderTo : document.body,\n        cls      : 'myGrid'\n    });\n\n    t.chain(\n        // Make sure some dummy test rows are rendered before test starts\n        { waitFor : 'rowsVisible', args : customerGrid }\n    );\n\n});\n</code></pre>\n\n<p>Now that we've instructed the test to wait for a stable condition, we can go back to the Siesta UI and activate the recorder panel by clicking the recorder icon.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder2.png\" alt=\"\" width=\"2136\" height=\"1250\"></p></p>\n\n<h2 id='event_recorder-section-the-event-recorder-interface'>The event recorder interface</h2>\n\n<p>The empty recorder looks like the below image. In the top left, the buttons are quite self explanatory: 'Record', 'Stop', 'Play' and 'Clear' allow you\nto capture and playback the recorded actions. In the top right section, you can 'Generate code', add a custom step and 'Close' the recorder panel.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder3.png\" alt=\"\" width=\"400\" height=\"382\"></p></p>\n\n<p>The grid has 3 columns:</p>\n\n<ul>\n<li>The 'Action' column is the type of action.</li>\n<li>The 'Target/Value' column contains the either the target of a UI action, the value\n(when typing text) or source code for the special function step.</li>\n<li>The 'Offset' column allows you to set an offset for your action so you can click\nat a precise point on your button or text field for example.</li>\n</ul>\n\n\n<p>Below the grid you can find a cheat sheet of the most common targets types (CSS query, Component Query and Composite Query).</p>\n\n<p>Try hitting the record button and click somewhere in your application UI. You should see an entry show up in the recorder grid. The first thing to do\nnow is to verify that the recorder understood your intention. This means reading the target description and possibly adjusting it. The recorder\ntries to understand your intention but it's <strong>not</strong> a mind reader (yet). Make sure to optimize the target to be the most stable. Having stable targets\nis very important to keep tests passing as you modify your UI or upgrade to newer versions of the Sencha framework.</p>\n\n<p>A simple example: Let's say you record a click on an Ext JS button, Siesta will suggest the following:</p>\n\n<pre><code>Target : schedulergrid button[text=Seconds] =&gt; .x-btn-inner\nOffset : [27, 13]\n</code></pre>\n\n<p>This is a Composite Query, left side is a regular Sencha Component Query, and the part after => is a simple CSS selector. How do we make this the most stable\ntarget selector? First of all, if all you wanted was to click anywhere on the button then the offset has no value so let's delete it. This makes\n sure that if the button dimensions change later (e.g. width lowered to 25px), the test will still work fine. The second thing to look at is the target itself. Unless you want to\n click at a specific HTML element inside the button, we don't really need the right side of the expression. This also protects you against the case where\n in a future Ext JS version, the .x-btn-inner class is renamed to something else (or removed). Converting the target to a Component Query is our best bet:</p>\n\n<pre><code>Target : &gt;&gt;schedulergrid button[text=Seconds]\nOffset :\n</code></pre>\n\n<p>Now, Siesta will always click at the center of the Button component which normally is what you want for buttons anyway.\nWhen you're done adjusting the target, try playing back the test to make sure all works fine. When playing back a recording, Siesta will first execute\nthe entire test (the skeleton you prepared) and after the test has finalized, the recorder actions will be played back.</p>\n\n<h2 id='event_recorder-section-editing-the-target-locator'>Editing the target locator</h2>\n\n<p>The fields in the grid are all editable, so it's easy for you to adjust the values inline. Clicking a <strong>Target</strong> cell allows you to either choose one of\nthe alternatives gathered by the recorder, or you can type any value you like. As you type, Siesta will try to highlight the target. You need to make sure\nthat you only target one thing on the screen, and make uour target selector specific to that target. If you have 5 Ext JS buttons on the page, just\ntyping \">> button\" won't work because it's a too generic target locator (Siesta will warn you in this case).</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder-target-editor.png\" alt=\"\" width=\"1480\" height=\"800\"></p></p>\n\n<h2 id='event_recorder-section-waiting-for-async-operations'>Waiting for async operations</h2>\n\n<p>As you will see, just naively recording some clicks on the screen and playing them back won't always work. A lot of the times, a UI will contain\nasynchronous behavior. A window might animate as it closes or a panel is collapsed with an animation etc. To make your tests aren't sensitive to these\nasync flows, you will need to wait - a lot. Siesta tries to help you as much as it can, by always waiting for a target to appear, and also for any\nongoing Ext JS animation to complete. So, in theory you should not need to worry about these two cases.</p>\n\n<p>Let's look at a simple example:</p>\n\n<pre><code>StartTest(function (t) {\n    Ext.getBody().update('&lt;div id=\"client_list\"&gt;&lt;/div&gt;');\n\n    var btn = new Ext.Button({\n        text        : 'Load data',\n        renderTo    : document.body,\n        handler     : function() {\n\n            // This Ajax request is obviously async\n            Ext.Ajax.request({\n                url     : 'Customers/Get',\n                success : function(response) {\n                    // Assuming an array is returned by server\n                    var clients = Ext.decode(response.responseText);\n\n                    Ext.get('client_list').update(clients.join('&lt;br/'));\n                }\n            });\n        }\n    });\n});\n</code></pre>\n\n<p>Let's say the test scenario is to click the button, and after the Ajax request is done we also click on the rendered client list. A naive attempt would be\nsome thing like:</p>\n\n<pre><code>// Click the button using a Component Query\n{ click : \"&gt;&gt; button[text=Load data]\" },\n\n// Then click the populated client list\n{ click : \"#client_list\" }\n</code></pre>\n\n<p>This <strong>might</strong> actually work if the Ajax request finishes really fast. But if it does, it's just luck and in any situation you should always wait to be sure.\nFor a situation like this, we can try using the <a href=\"#!/api/Siesta.Test.Element-method-waitForElementNotVisible\" rel=\"Siesta.Test.Element-method-waitForElementNotVisible\" class=\"docClass\">waitForElementNotVisible</a> method.\nClick the '+' button to add a new custom step, and drag it in between the two click steps.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder-wait-action.png\" alt=\"\" width=\"600\" height=\"303\"></p></p>\n\n<p>After adding the wait step, this test sequence is now robust and it doesn't matter if the ajax request takes 5ms or 10 seconds.</p>\n\n<h2 id='event_recorder-section-the-function-step'>The function step</h2>\n\n<p>As you interact with your application UI you most likely want to perform some assertions along the way. While this is easier to do in your own IDE,\nwe've added a simple code editor to the recorder too. If we continue on the previous sample, it would be nice to assert that a certain text exists after\nthe loading is completed. To add such a function step, select the 'fn' action in the list and hit TAB. Now we can execute any regular JS, and of course\nuse any of the <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a> assertion methods.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder-fn-step.png\" alt=\"\" width=\"1024\" height=\"360\"></p></p>\n\n<p>When you feel done with the recorded events, you can simply hit the <strong>Generate code</strong> button and copy-paste the contents into your test skeleton.</p>\n\n<p><p><img src=\"guides/event_recorder/images/recorder_generated_code.png\" alt=\"\" width=\"1200\" height=\"802\"></p></p>\n\n<h2 id='event_recorder-section-recording-a-move-cursor-to-step'>Recording a move-cursor-to step</h2>\n\n<p>Sometimes you want to simply move the cursor to certain place on the screen without doing any further action. Since the recorder doesn't record every\nmouse movement, there is a special way to signal to Siesta that you want to move the cursor somewhere. Simply move the mouse to where it should be and\nleave it for 3 seconds, you'll then see a <strong>moveCursorTo</strong> action added to the list. This is useful in lots of scenarios, for example when triggering\na grid column menu to show. You cannot click the menu icon right away, since it's hidden until you move the cursor over the grid column header.</p>\n\n<h2 id='event_recorder-section-buy-this-product'>Buy this product</h2>\n\n<p>Visit our store: <a href=\"http://bryntum.com/store/siesta\">http://bryntum.com/store/siesta</a></p>\n\n<h2 id='event_recorder-section-support'>Support</h2>\n\n<p>Ask question in our community forum: <a href=\"http://www.bryntum.com/forum/viewforum.php?f=20\">http://www.bryntum.com/forum/viewforum.php?f=20</a></p>\n\n<p>Share your experience in our IRC channel: <a href=\"http://webchat.freenode.net/?randomnick=1&amp;channels=bryntum&amp;prompt=1\">#bryntum</a></p>\n\n<p>Please report any bugs through the web interface at <a href=\"https://www.assembla.com/spaces/bryntum/support/tickets\">https://www.assembla.com/spaces/bryntum/support/tickets</a></p>\n\n<h2 id='event_recorder-section-see-also'>See also</h2>\n\n<p>Web page of this product: <a href=\"http://bryntum.com/products/siesta\">http://bryntum.com/products/siesta</a></p>\n\n<p>Other Bryntum products: <a href=\"http://bryntum.com/products\">http://bryntum.com/products</a></p>\n\n<h2 id='event_recorder-section-copyright-and-license'>COPYRIGHT AND LICENSE</h2>\n\n<p>Copyright (c) 2009-2014, Bryntum &amp; Nickolay Platonov</p>\n\n<p>All rights reserved.</p>\n","title":"Using the event recorder"});