import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { Resource } from '@fleetbase/sdk';

export default helper(function t([target, property, defaultValue = null]) {
    if (typeof target?.getAttribute === 'function') {
        return target.getAttribute(property, defaultValue);
    }

    return get(target, property) ?? defaultValue;
});
