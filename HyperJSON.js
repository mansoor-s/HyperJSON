var JSONConverter;
(function() {
    JSONConverter = function ( json ) {
        if ( json instanceof Object ) {
            // assume it is allready an object
            return getHtml( json )
        } else if ( typeof(json) === 'string' ){
            try {
                json = JSON.parse( json );
            } catch (e) {
                throw 'Malformed JSON data';
            }
            return getHtml( json );
        } else {
            throw 'Malformed JSON data';
        }
    };
    
    function getHtml( obj ) {
        var content = '';
        var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
        if (obj['css']) {
            var css = '';
            obj.css.forEach(function ( elem ) {
                css += '    <link rel="stylesheet" type="text/css" href="' + elem + '">\n';
            });
            html += css;
        }
        if ( obj[ 'meta' ] ) {
            var meta = '';
            obj.meta.forEach(function ( elem ) {
                meta += '    <meta ';
                for ( var prop in elem ) {
                    meta += prop + '="' + elem[ prop ] + '" ';
                }
                meta += '/>\n';
            });
            html += meta;
        }
        if ( obj[ 'link' ] ) {
            var link = '';
            obj.link.forEach(function ( elem ) {
                link += '    <link ';
                for ( var prop in elem ) {
                    link += prop + '="' + elem[ prop ] + '" ';
                }
                link += '/>\n';
            });
            html += link + '\n';
        }
        if ( obj[ 'title' ] ) {
            var title = obj.title;
            html += '    <title>' + title + '</title>\n';
        }
        html += '</head>\n<body>\n';
        if ( obj[ 'content' ] ) {
            html += parseContent( obj.content ) + '\n';
        }
        if ( obj[ 'javascript' ] ) {
            var javascript = '';
            obj.javascript.forEach(function ( elem ) {
                javascript += '    <script type="text/javascript" src="' + elem + '"><script>\n';
            });
            html += javascript + '\n';
        }
        html += '</body>\n</html>';
        return html;
    }
    
    function parseContent( obj ) {
        if ( !obj instanceof Array ) {
            return '';
        }
        var markup = '';
        //itterate through each content item
        obj.forEach(function ( elem ) {
            if ( typeof( elem ) === 'string' ) {
                markup = elem;
            } else if ( typeof( elem ) === 'object' ) {
                markup += '<' + elem.node + ' ';
                for ( var prop in elem ) {
                    var has_content = false;
                    if ( prop === 'node' ) {
                        continue;
                    } else if ( prop === 'content' ) {
                        has_content = true;
                        continue;
                    } else {
                        markup += prop + '="' + elem[ prop ] + '" ';
                    }
                }
                if ( has_content ) {
                    markup += '>';
                    markup += parseContent( elem.content );
                    markup += '</' + elem.node + '>';
                } else {
                    markup += '/>';
                }
            } else {
                throw "Bad JSON!"
            }
        });
        return markup;
    }
})();