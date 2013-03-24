RLChecked
=========

A jQuery checkboxes and radio buttons plugin with keyboard accessibility navigation

<h2>About</h2>
<p>rlChecked is a small, clean and efficient plugin cross-browser and keyboard accessible, tested even IE7.</p>

<h2>Usage</h2>

<h3>HTML</h3>

    <form action="#" method="post">
      <fieldset>
        <legend>Checkboxes</legend>
        <ul>
          <li>
            <input id="one" checked="checked" type="checkbox" name="ckbx" />
            <label for="one">Checked</label>
          </li>
          <li>
            <input id="two" type="checkbox" name="ckbx" />
            <label for="two">Unchecked</label>
          </li>
          <li>
            <input id="three" checked="checked" disabled="disabled" type="checkbox" name="ckbx" />
            <label for="three">Disable Checked</label>
          </li>
          <li>
            <input id="four" disabled="disabled" type="checkbox" name="ckbx" />
            <label for="four">Disable Unchecked</label>
          </li>
        </ul>
      </fieldset>
    </form>

    <form action="#" method="post">
      <fieldset>
        <legend>Checkboxes &amp; Radio Buttons</legend>
        <ul>
          <li>
            <input id="five" checked="checked" type="checkbox" name="ckbx" />
            <label for="five">Checked</label>
          </li>
          <li>
            <input id="six" type="checkbox" name="ckbx" />
            <label for="six">Unchecked</label>
          </li>
          <li>
            <input id="seven" type="checkbox" name="ckbx" />
            <label for="seven">Unchecked</label>
          </li>
          <li>
            <input id="eight" type="checkbox" name="ckbx" />
            <label for="eight">Unchecked</label>
          </li>
          <li>
            <input id="eight" type="checkbox" name="ckbx" />
            <label for="eight">Unchecked</label>
          </li>
          <li>
            <input id="nine" checked="checked" type="radio" name="radio" />
            <label for="nine">Checked</label>
          </li>
          <li>
            <input id="ten" type="radio" name="radio" />
            <label for="ten">Unchecked</label>
          </li>
          <li>
            <input id="eleven" type="radio" name="radio" />
            <label for="eleven">Unchecked</label>
          </li>
          <li>
            <input id="twelve" type="radio" name="radio" />
            <label for="twelve">Unchecked</label>
          </li>
          <li>
            <input id="thirteen" type="radio" name="radio" />
            <label for="thirteen">Unchecked</label>
          </li>
        </ul>
      </fieldset>
    </form>

    <form action="#" method="post">
      <fieldset>
        <legend>Radio Buttons</legend>
        <ul>
          <li>
            <input id="fourteen" checked="checked" type="radio" name="radio" />
            <label for="fourteen">Checked</label>
          </li>
          <li>
            <input id="fifteen" type="radio" name="radio" />
            <label for="fifteen">Unchecked</label>
          </li>
          <li>
            <input id="sixteen" type="radio" name="radio" />
            <label for="sixteen">Unchecked</label>
          </li>
          <li>
            <input id="eighteen" type="radio" name="radio" />
            <label for="eighteen">Unchecked</label>
          </li>
          <li>
            <input id="nineteen" type="radio" name="radio" />
            <label for="nineteen">Unchecked</label>
          </li>
        </ul>
      </fieldset>
    </form>
    <form action="#" method="post">
      <fieldset>
        <legend>Radio Buttons</legend>
        <ul>
          <li>
            <input id="twenty" type="radio" name="radio" />
            <label for="twenty">Unchecked</label>
          </li>
          <li>
            <input id="twenty-one" type="radio" name="radio" />
            <label for="twenty-one">Unchecked</label>
          </li>
          <li>
            <input id="twenty-two" type="radio" name="radio" />
            <label for="twenty-two">Unchecked</label>
          </li>
          <li>
            <input id="twenty-three" type="radio" name="radio" />
            <label for="twenty-three">Unchecked</label>
          </li>
          <li>
            <input id="twenty-four" type="radio" name="radio" />
            <label for="twenty-four">Unchecked</label>
          </li>
        </ul>
      </fieldset>
    </form>
    <form action="">
      <fieldset>
        <legend>Radio Buttons</legend>
        <ul>
          <li>
            <input id="twenty-five" disabled="disabled" checked="checked" type="radio" name="radio" />
            <label for="twenty-five">Disable Checked</label>
          </li>
          <li>
            <input id="twenty-six" disabled="disabled" type="radio" name="radio" />
            <label for="twenty-six">Disable Unchecked</label>
          </li>
        </ul>
      </fieldset>
    </form>
  <!-- || change for your html structure -->

<h3>JS</h3>


<p>How to implement:</p>

    <script>

      $(function() {

        $("input").rlChecked();

        // or with options
        $("input").rlChecked({

          element: "<span>elements</span>", // html tag created to insert through the DOM
          checkboxes: "checkboxes", // parent class of checkboxes
          radios: "radios", // parent class of radio buttons
          tag: "li", // html tag parent for checkboxes and radio buttons
          bg: "span", // reference a settings.element for make use like a variable
          check: "checked", // sign a class when a checkbox is checked
          radio: "radio", // sign a class when a radio button is checked
          focus: "focus", // sign a class when accessed with keyboard a checkbox or radio button element
          disable: "disabled", // sign a class when a checkbox or radio button element have the disabled attribute
          hover: "hover" // sign a class when hover a checkbox or radio button element

        });

      });

    </script>

    // All options are variables that can be adapted by replacing the classes & || html element of your code.


<h2>Demo:</h2>

<p>http://rodrigoludgero.com/rlchecked/rlchecked.html</p>


<h2>License</h2>
<p>Copyright (c) 2013 Rodrigo Ludgero Licensed under the MIT license</p>

<pre>
<code>

The MIT License

Copyright (c) 2013 Rodrigo Ludgero, http://rodrigoludgero.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

</code>
</pre>
