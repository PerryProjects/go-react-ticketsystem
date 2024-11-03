import type {UseFetchOptions} from '#app';
import type {KeysOf} from '#app/composables/asyncData';
import type {FetchResult} from '#app/composables/fetch';
import type {
    AvailableRouterMethod,
    NitroFetchOptions,
    NitroFetchRequest,
} from 'nitropack';
import type {Ref} from 'vue';
import {defu} from 'defu';

export function useApiFetch<ResT = void, ReqT extends NitroFetchRequest = NitroFetchRequest, Method extends AvailableRouterMethod<ReqT> = ResT extends void ? 'get' extends AvailableRouterMethod<ReqT> ? 'get' : AvailableRouterMethod<ReqT> : AvailableRouterMethod<ReqT>, _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT, DataT = _ResT, PickKeys extends KeysOf<DataT> = KeysOf<DataT>, DefaultT = null>(url: Ref<ReqT> | ReqT | (() => ReqT), options: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method> = {}) {
    const {token} = useAuth();
    const config = useRuntimeConfig();

    const defaults: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method> = {
        baseURL: config.public.apiUrl as string ?? '',
        headers: {
            Authorization: token.value as string,
        },
    };

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults);
    return useFetch(url, params);
}

export function $apiFetch<ResT = void, ReqT extends NitroFetchRequest = NitroFetchRequest, Method extends AvailableRouterMethod<ReqT> = ResT extends void ? 'get' extends AvailableRouterMethod<ReqT> ? 'get' : AvailableRouterMethod<ReqT> : AvailableRouterMethod<ReqT>>(url: ReqT, options: NitroFetchOptions<ReqT, Method>) {
    const {token} = useAuth();
    const config = useRuntimeConfig();

    const defaults: NitroFetchOptions<ReqT, Method> = {
        baseURL: config.public.apiUrl as string ?? '',
        headers: {
            Authorization: token.value as string,
        },
    };

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults);

    // use $fetch instead of useFetch
    return $fetch<ResT>(url, params);
}
