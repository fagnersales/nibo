# MessageCollectorRunOptions

Properties for [MessageCollector](../docs/messagecollector.md)

## Types

* ****[**Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object)****

## Properties

<table><thead><tr><th>Parameter</th><th>Type</th><th data-type="checkbox">Optional</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>time</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></td><td>true</td><td>The time in miliseconds this collector will be awaiting for a response</td><td>300_000</td></tr><tr><td>silent</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a></td><td>true</td><td>Whether or not error messages should be sent if the content is not valid</td><td><code>false</code></td></tr><tr><td>filter</td><td><a href="filter.md">filter</a></td><td>true</td><td>filter to validate if the message should be collected</td><td><em>none</em></td></tr><tr><td>onFailedFilter</td><td><a href="onfailedfilter.md">onFailedFilter</a> (no reason is provided)</td><td>true</td><td>callback triggered when a message sent fails the test</td><td><em>none</em></td></tr></tbody></table>
