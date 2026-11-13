import * as THREE from "three";
const canvas=document.getElementById("orbCanvas");
if(canvas&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.z=4.2;
 const group=new THREE.Group();scene.add(group);
 const sphere=new THREE.Mesh(new THREE.IcosahedronGeometry(1.12,5),new THREE.MeshPhysicalMaterial({color:0x70d8cb,metalness:.55,roughness:.22,transmission:.16,thickness:.8,clearcoat:1,clearcoatRoughness:.1}));group.add(sphere);
 const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.16,2),new THREE.MeshBasicMaterial({color:0xb8b0ff,wireframe:true,transparent:true,opacity:.22}));group.add(wire);
 const count=850,positions=new Float32Array(count*3);for(let i=0;i<count;i++){const r=1.35+Math.random()*.75,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);positions[i*3]=r*Math.sin(p)*Math.cos(t);positions[i*3+1]=r*Math.cos(p);positions[i*3+2]=r*Math.sin(p)*Math.sin(t)}
 const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(positions,3));const points=new THREE.Points(geo,new THREE.PointsMaterial({color:0xa4f6e8,size:.012,transparent:true,opacity:.8}));group.add(points);
 scene.add(new THREE.AmbientLight(0xffffff,.8));const light=new THREE.PointLight(0x9ef4e5,4,10);light.position.set(2,2,3);scene.add(light);
 const resize=()=>{const r=canvas.getBoundingClientRect();renderer.setSize(Math.max(1,r.width),Math.max(1,r.height),false);camera.aspect=r.width/Math.max(1,r.height);camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(canvas);resize();
 let frame=0;const animate=()=>{frame++;group.rotation.y=frame*.0028;group.rotation.x=Math.sin(frame*.003)*.12;wire.rotation.y=-frame*.0015;points.rotation.y=-frame*.0007;renderer.render(scene,camera);requestAnimationFrame(animate)};animate();
}