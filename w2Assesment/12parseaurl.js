const parseURL = (url) => {
    const urlObject = new URL(url);
    return {
        href: urlObject.href,
        origin: urlObject.origin,
        protocol: urlObject.protocol,
        host: urlObject.host,
        pathname: urlObject.pathname,
        search: urlObject.search,
        hash: urlObject.hash
    };
};

console.log(parseURL('https://example.com:8080/path/name?query=string#hash'));
