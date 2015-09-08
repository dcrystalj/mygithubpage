function createWhiteNet() {
    var points = [];
    var len = 100;
    // for (var i = -len; i < len; i+=5) {
    //     points.push([i, 0, -len, 1]);
    //     points.push([i, 0,  len, 1]);

    //     points.push([-len, 0, i, 1]);
    //     points.push([len, 0,  i, 1]);
    // }
    points.push([0, len, 0, 1]);
    points.push([0, 0,  0, 1]);

    points.push([len, 0, 0, 1]);
    points.push([-len, 0,  0, 1]);

    points.push([0, 0, len, 1]);
    points.push([0,  0, -len, 1]);

    return points;
}

/* cylinder creation */
function createCylinder () {
    var cylinder = [];
    var points = [];
    var normals = [];
    for(var i=0; i<360; i+=10){ 
        var deg = radians(i);
        var x = Math.cos(deg);
        var y = Math.sin(deg);
        points.push([x, y, -2, 1]);
        points.push([x, y, 2, 1]);
        
        normals.push([x, y, 0, 0]);
        normals.push([x, y, 0, 0]);

        var deg1 = radians(i+10);
        var x1 = Math.cos(deg1);
        var y1 = Math.sin(deg1);
        points.push([x1, y1, 2, 1]);

        points.push([x1, y1, 2, 1]);
        points.push([x, y, -2, 1]);
        points.push([x1, y1, -2, 1]);

        normals.push([x1, y1, 0, 0]);
        normals.push([x1, y1, 0, 0]);
        normals.push([x, y, 0, 0]);
        normals.push([x1, y1, 0, 0]);
        // points.push([x1, y1, 2, 1]);
        // points.push([x1, y1, -2, 1]);
        // points.push([x, y, 2, 1]);
        // points.push([x1, y1, 2, 1]);
        // points.push([x, y, -2, 1]);
        // points.push([x1, y1, -2, 1]);

        // normals.push([x1, y1, 0, 0]);
        // normals.push([x1, y1, 0, 0]);
        // normals.push([x, y, 0, 0]);
        // normals.push([x1, y1, 0, 0]);
        // normals.push([x, y, 0, 0]);
        // normals.push([x1, y1, 0, 0]);
    }
    cylinder.vertices = points;
    cylinder.normals = normals;
    cylinder.len = points.length;
    return cylinder;
}

/* quad creation */
function createCone() {
    var cone;
    var normals = [];
    var cone =[
        [1.5, 0, 0, 1,],
        [-1.5, 1, 0, 1,],
        [-1.5, 0.809017,  0.587785,1,],
        [-1.5, 0.309017,  0.951057, 1,],
        [-1.5, -0.309017, 0.951057, 1,],
        [-1.5, -0.809017, 0.587785,1,],
        [-1.5, -1, 0, 1,],
        [-1.5, -0.809017, -0.587785,1,],
        [-1.5, -0.309017, -0.951057, 1,],
        [-1.5, 0.309017,  -0.951057, 1,],
        [-1.5, 0.809017,  -0.587785, 1]
    ];
    var indices = [
        [0, 1, 2],
        [0, 2, 3],
        [0, 3, 4],
        [0, 4, 5],
        [0, 5, 6],
        [0, 6, 7],
        [0, 7, 8],
        [0, 8, 9],
        [0, 9, 10],
        [0, 10, 1]
    ];

    var points = [];
    for ( var i = 0; i < indices.length; i++ ) {
        for (var j = 0; j < indices[i].length; j++) {
            points.push( cone[indices[i][j]] );
            
            var a = cone[indices[i][j]].slice(0);
            a[0] = 1;
            a[3] = 0;
            normals.push( a );
        };
        //colors.push( vertexColors[indices[i]] );

        // for solid colored faces use
        // colors.push(vertexColors[a]);
    }

    cone.vertices = points;
    cone.normals = normals;
    cone.len = points.length;
    return cone;
}


/* quad creation */
function createQuad(){
    var quad = [
        [ -0.5, -0.5,  0.5, 1],
        [ -0.5,  0.5,  0.5, 1],
        [  0.5,  0.5,  0.5, 1],
        [  0.5, -0.5,  0.5, 1],
        [ -0.5, -0.5, -0.5, 1],
        [ -0.5,  0.5, -0.5, 1],
        [  0.5,  0.5, -0.5, 1],
        [  0.5, -0.5, -0.5, 1]
    ];

    var indices = [
        [1, 0, 3, 2],
        [2, 3, 7, 6],
        [3, 0, 4, 7],
        [6, 5, 1, 2],
        [4, 5, 6, 7],
        [5, 4, 0, 1]
    ];

    var indices_i = [ 0, 1, 2, 0, 2, 3 ];
    var points = [];
    for ( var i = 0; i < indices.length; i++ ) {
        for (var j = 0; j < indices_i.length; j++) {
            points.push( quad[indices[i][indices_i[j]]] );
        };
        //colors.push( vertexColors[indices[i]] );

        // for solid colored faces use
        // colors.push(vertexColors[a]);
    }

    return points;
}

/* spheere creation */
function createSphere() {
    var sphere = [];
    var pointsArray = [];
    var normalsArray = [];
    var textureArray = [];

    function uv(x, y){
        var theta = Math.acos(y);
        var phi = Math.acos(x / Math.sin(theta));

        var latN = 30 *  theta / Math.PI;
        var longN = 15 *  phi / Math.PI;

        var u = 1.2-(longN/30);
        var v = 1.1-(latN/30  );

        return [u, v];
    }

    function triangle(a, b, c) {
         pointsArray.push(a);
         pointsArray.push(b);
         pointsArray.push(c);

         normalsArray.push([a[0],a[1], a[2], 0.0]);
         normalsArray.push([b[0],b[1], b[2], 0.0]);
         normalsArray.push([c[0],c[1], c[2], 0.0]);
         

        if (mapping == "planar") {
             textureArray.push([a[0],a[1]]);
             textureArray.push([b[0],b[1]]);
             textureArray.push([c[0],c[1]]);
        }
        else {
             textureArray.push(uv(a[0], a[1]));
             textureArray.push(uv(b[0], b[1]));
             textureArray.push(uv(c[0], c[1]));
        }
    }

    function divideTriangle(a, b, c, count) {
        if ( count > 0 ) {

            var ab = mix( a, b, 0.5);
            var ac = mix( a, c, 0.5);
            var bc = mix( b, c, 0.5);

            ab = normalize(ab, true);
            ac = normalize(ac, true);
            bc = normalize(bc, true);

            divideTriangle( a, ab, ac, count - 1 );
            divideTriangle( ab, b, bc, count - 1 );
            divideTriangle( bc, c, ac, count - 1 );
            divideTriangle( ab, bc, ac, count - 1 );
        }
        else {
            triangle( a, b, c );
        }
    }

    function tetrahedron(a, b, c, d, n) {
        divideTriangle(a, b, c, n);
        divideTriangle(d, c, b, n);
        divideTriangle(a, d, b, n);
        divideTriangle(a, c, d, n);
    }

    var va = vec4(0.0, 0.0, -1.0,1);
    var vb = vec4(0.0, 0.942809, 0.333333, 1);
    var vc = vec4(-0.816497, -0.471405, 0.333333, 1);
    var vd = vec4(0.816497, -0.471405, 0.333333,1);

    tetrahedron(va, vb, vc, vd, 4);

    sphere.vertices = pointsArray;
    sphere.normals = normalsArray;
    sphere.len = pointsArray.length;
    sphere.texture = textureArray;
    return sphere;
}


var texSize = 64;

var image1 = new Array()
    for (var i =0; i<texSize; i++)  image1[i] = new Array();
    for (var i =0; i<texSize; i++)
        for ( var j = 0; j < texSize; j++)
           image1[i][j] = new Float32Array(4);
    for (var i =0; i<texSize; i++) for (var j=0; j<texSize; j++) {
        var c = (((i & 0x8) == 0) ^ ((j & 0x8)  == 0));
        image1[i][j] = [c, c, c, 1];
    }

// Convert floats to ubytes for texture

var image2 = new Uint8Array(4*texSize*texSize);

    for ( var i = 0; i < texSize; i++ )
        for ( var j = 0; j < texSize; j++ )
           for(var k =0; k<4; k++)
                image2[4*texSize*i+4*j+k] = 255*image1[i][j][k];


function configureTexture( image ) {
    texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB,
         gl.RGB, gl.UNSIGNED_BYTE, image );
    gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
                      gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

    gl.uniform1i(gl.getUniformLocation(program, "texture"), 0);
}

function configureTexture1(image) {
    var texture = gl.createTexture();
    gl.activeTexture( gl.TEXTURE0 );
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, texSize, texSize, 0,
        gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
        gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
}
