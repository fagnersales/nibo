---
description: Properties for TextInputCollector
---

# TextInputCollectorProps

Properties for [TextInputCollector](../docs/textinputcollector.md)

## Types

* ****[**Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object)****

## Properties

<table><thead><tr><th>Parameter</th><th>Type</th><th data-type="checkbox">Optional</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>minLength</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td><td>true</td><td>The minimum length  for the received content</td><td>1</td></tr><tr><td>maxLength</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td><td>true</td><td>The maximum length  for the received content</td><td>2048</td></tr><tr><td>pattern</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">RegExp</a></td><td>true</td><td>A pattern for matching the received content</td><td><em>none</em></td></tr><tr><td>silent</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></td><td>true</td><td>Whether or not error messages should be sent if the content is not valid</td><td><code>false</code></td></tr><tr><td>otherFilter</td><td><a href="otherfilter.md">otherFilter</a></td><td>true</td><td>Another filter applied to this collector</td><td><em>none</em></td></tr><tr><td>onFailedFilter</td><td><a href="onfailedfilter.md">onFailedFilter</a></td><td>true</td><td>callback triggered when a message sent fails the test</td><td><em>none</em></td></tr></tbody></table>

