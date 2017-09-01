var socket = null;

function submitInfo() {
    var msg = $("#message").val();
    $("#chat").append($("<div><span class=\"user-me\">me:&nbsp;</span>" + msg + "</div>"));
    $("#message").val('');
    socket.send(msg);
    console.log("Here is socket send meg format: ");
    console.log(msg);
}

function submitEvent(data) {
    console.log("submit to socket: data:\n");
    console.log(data);
    socket.send(data);
}

var ctrlBox = null;

$(function () {

    var name = 'WebMatrix User';

    socket = io.connect();

    socket.on('connect', function () {
        socket.emit('setname', name);
        // $("#console").append($("<div class=\"system\">test.js You have joined</div>"));
    });

    socket.on('announcement', function (data) {
        // $("#console").append($("<div class=\"system\">" + data.announcement + "</div>"));
    });

    socket.on('eventTran', function (data) {

        console.log("Socket on : eventTran");
    });

    socket.on('message', function (data) {
        console.log("socket.on message");
        ctrlBox(parseInt(data.event));
        // $("#console").append($("<div><span class=\"user\">" + data.message[0] + ":&nbsp;</span>" + data.message[1] + "</div>"));
    });

    socket.on('messages', function (data) {
        console.log("socket.on messageS:  data:");
        console.log(data);
        for (var i = 0; i < data.buffer.length; i++) {       
            //ctrl the box
            ctrlBox(data.buffer[i].event);
            // $("#console").append($("<div><span class=\"user\">" + data.buffer[i].message[0] + ":&nbsp;</span>" + data.buffer[i].message[1] + "</div>"));
        }
    });

    // $("#send").click(function (e) {
    //     e.preventDefault();
    //     submitInfo();
    // });


    // })



    // $(function () {
    /**
     * Support WebGL or Not
     */
    var cvs = document.createElement('canvas');
    var contextNames = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
    var ctx;

    if (navigator.userAgent.indexOf('MSIE') >= 0) {
        try {
            ctx = WebGLHelper.CreateGLContext(cvs, 'canvas');
        } catch (e) { }
    }
    else {
        for (var i = 0; i < contextNames.length; i++) {
            try {
                ctx = cvs.getContext(contextNames[i]);
                if (ctx) {
                    // addLine('tab','Context Name', contextNames[i]);
                    console.log("Context Name" + contextNames[i]);
                    break;
                }
            } catch (e) { }
        }
    }

    var result = ctx ? 'Yay' : 'Nay';
    //document.getElementById('TestInfo').innerHTML = result;
    //console.log(result);

    /**
     * Three.js code : create a colorful box with a mouse event listener
     */
    var tt = THREE;
    var resizeVar = 0.9;

    var container, stats, tt_div;

    var scene = new tt.Scene();
    var camera = new tt.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new tt.WebGLRenderer();
    renderer.setClearColor(0xf0f0f0);
    renderer.setSize(window.innerWidth * resizeVar, window.innerHeight * resizeVar);
    // document.div.appendChild( renderer.domElement );
    tt_div = document.getElementById('THREE');
    document.getElementById('THREE').appendChild(renderer.domElement);

    var geometry = new tt.BoxGeometry(2, 2, 2);
    for (var i = 0; i < geometry.faces.length; i += 2) {

        var hex = Math.random() * 0xffffff;
        geometry.faces[i].color.setHex(hex);
        geometry.faces[i + 1].color.setHex(hex);

    }
    // var material = new tt.MeshBasicMaterial( { color: 0x507BC8 } );
    var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });
    var cube = new tt.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    camera.position.x = 1;

    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = '0px';
    // container.appendChild( stats.domElement );
    var mouseX = 0;
    var mouseXOnMouseDown = 0;
    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    tt_div.addEventListener('mousedown', onDocumentMouseDown, false);
    tt_div.addEventListener('touchstart', onDocumentTouchStart, false);
    tt_div.addEventListener('touchmove', onDocumentTouchMove, false);
    function onDocumentMouseDown(event) {

        event.preventDefault();

        tt_div.addEventListener('mousemove', onDocumentMouseMove, false);
        tt_div.addEventListener('mouseup', onDocumentMouseUp, false);
        tt_div.addEventListener('mouseout', onDocumentMouseOut, false);

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove(event) {
        // console.log("onDocumentMouseMove");
        myLog("onDocumentMouseMove");
        mouseX = event.clientX - windowHalfX;

        var data = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
        targetRotation = data;

        submitEvent(data);
        myLog(data);
    }

    function onDocumentMouseUp(event) {

        tt_div.removeEventListener('mousemove', onDocumentMouseMove, false);
        tt_div.removeEventListener('mouseup', onDocumentMouseUp, false);
        tt_div.removeEventListener('mouseout', onDocumentMouseOut, false);

    }

    function onDocumentMouseOut(event) {

        tt_div.removeEventListener('mousemove', onDocumentMouseMove, false);
        tt_div.removeEventListener('mouseup', onDocumentMouseUp, false);
        tt_div.removeEventListener('mouseout', onDocumentMouseOut, false);

    }

    function onDocumentTouchStart(event) {

        if (event.touches.length === 1) {

            event.preventDefault();

            mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;

        }

    }

    function onDocumentTouchMove(event) {
        myLog("onDocumentTouchMove");
        if (event.touches.length === 1) {

            event.preventDefault();

            mouseX = event.touches[0].pageX - windowHalfX;
            var data = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
            targetRotation = data;

            submitEvent(data);
            myLog(data);
        }

    }

    ctrlBox = function (data) {
        targetRotation = parseInt(data);
    }

    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += (targetRotation - cube.rotation.x) * 0.08;
        cube.rotation.y += 0.035;

        renderer.render(scene, camera);
    };
    cube.rotation.x += 10;
    render();

    // function animate() {

    // 	requestAnimationFrame( animate );

    // 	render();
    // 	// stats.update();

    // }

    // function render() {

    // 	cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
    // 	renderer.render( scene, camera );

    // }



    //old 
    // var scene = new tt.Scene();
    // var camera = new tt.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // var renderer = new tt.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );

    // var geometry = new tt.BoxGeometry( 1, 1, 1 );
    // var material = new tt.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new tt.Mesh( geometry, material );
    // scene.add( cube );

    // camera.position.z = 5;

    // function render() {
    // 	requestAnimationFrame( render );
    // 	renderer.render( scene, camera );
    // }
    // render();
    // cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;

    function myLog(str) {
        // console.log(str);
        // document.getElementById('TestInfo').innerHTML += "<br />" + str;
        // if (document.getElementById('TestInfo').innerHTML.length > 1000) {
        //     document.getElementById('TestInfo').innerHTML = "";
        //}
    }

})