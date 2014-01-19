RLChecked
=========

A jQuery checkboxes and radio buttons plugin with keyboard accessibility navigation

<h2>About</h2>
<p>rlChecked is a small, clean and efficient plugin cross-browser and keyboard accessible, tested even IE7.</p>
<p>Now you can use pseudo-elements with @font-face icons</p>
<p>I´m including a @font-face example, using FontAwesome https://github.com/FortAwesome/Font-Awesome and Ionicons https://github.com/driftyco/ionicons</p>

<h2>Usage</h2>

<h3>HTML</h3>

  <!-- with li -->

    <form>
      <fieldset>
        <legend>Checkboxes</legend>
        <ul>
          <li>
            <input id="zero" checked="checked" type="checkbox" name="chkbx" />
            <label for="zero">Checkbox</label>
          </li>
          <li>
            <input id="one" checked="checked" type="checkbox" name="chkbx" />
            <label for="one">Checkbox</label>
          </li>
          <li>
            <input id="two" type="checkbox" name="chkbx" />
            <label for="two">Checkbox</label>
          </li>
          <li>
            <input id="three" checked="checked" disabled="disabled" type="checkbox" name="chkbx" />
            <label for="three">Disable Checked</label>
          </li>
          <li>
            <input id="four" disabled="disabled" type="checkbox" name="chkbx" />
            <label for="four">Disable Unchecked</label>
          </li>
        </ul>
      </fieldset>

  <!-- or div -->

      <fieldset>
        <legend>Radio Buttons</legend>
          <div>
            <input id="fourteen" checked="checked" type="radio" name="radio" />
            <label for="fourteen">Radio</label>
          </div>
          <div>
            <input id="fifteen" type="radio" name="radio" />
            <label for="fifteen">Radio</label>
          </div>
          <div>
            <input id="sixteen" type="radio" name="radio" />
            <label for="sixteen">Radio</label>
          </div>
          <div>
            <input id="eighteen" disabled="disabled" checked="checked" type="radio" name="radio2" />
            <label for="eighteen">Disable Checked</label>
          </div>
          <div>
            <input id="nineteen" disabled="disabled" type="radio" name="radio2" />
            <label for="nineteen">Disable Unchecked</label>
          </div>
      </fieldset>
    </form>

  <!-- or change for other html tag -->

<h3>JS</h3>


<p>How to implement:</p>

    <script>

      $(function() {

        $("input").rlChecked();

        // with severals in the same projects
        $("example1 input, example2 input, example3 input").rlChecked();

        // or with options
        $("input").rlChecked({

          element: "<span></span>", // html tag created to insert through the DOM
          checkboxes: "rlCheckboxes", // parent class of checkboxes
          radios: "rlRadios", // parent class of radio buttons
          bg: "span", // reference a settings.element for make use like a variable
          check: "checked", // sign a class when a checkbox is checked
          radio: "radio", // sign a class when a radio button is checked
          focus: "focus", // sign a class when accessed with keyboard a checkbox or radio button element
          disable: "disabled", // sign a class when a checkbox or radio button element have the disabled attribute
          disableChecked: "disabled-checked", // sign a class when a radio-button and checkbox element have the disabled and checked attribute, this behavior is necessary when have this attributes combination
          hover: "hover" // sign a class when hover a checkbox or radio button element

        });

      });

    </script>

    // All options are variables that can be adapted by replacing the classes & || html element of your code.


<h2>Demo:</h2>

<p>http://rodrigoludgero.com/rlchecked/rlchecked.html</p>


<h2>License</h2>
<p>Copyright (c) 2014 Rodrigo Ludgero Licensed under the MIT license</p>

<pre>
<code>

The MIT License

Copyright (c) 2014 Rodrigo Ludgero, http://rodrigoludgero.com

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
