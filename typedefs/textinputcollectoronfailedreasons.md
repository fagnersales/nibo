# TextInputCollectorOnFailedReasons

## Types

* ****[**Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object)****

## Properties

| Parameter                   | Type                                                                                               | Description                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| LengthIsLessThanMinimum     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | When the length of the content fails for being less than minimum     |
| LengthIsGreatherThanMaximum | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | When the length of the content fails for being greather than maximum |
| PatternDoesNotMatch         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | When the content pattern does not match the given property `pattern` |
| OtherFilterFailed           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | When the content does not pass the given property `otherFilter`      |
| Unknown                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | Failed for unknown reason                                            |
