import React,{Suspense,lazy,useEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const BeaconScene=lazy(()=>import('./BeaconScene.jsx'));
const colors={red:'#ef4444',amber:'#f59e0b',blue:'#38bdf8'};

function StaticBeacon({color}){return <div className="static-stage" aria-label="Static emergency beacon illustration"><div className="static-beacon" style={{'--beacon-color':colors[color]}}><div className="static-dome"/><div className="static-ring"/><div className="static-base"/></div></div>}

export default function App(){
  const [active,setActive]=useState(false),[color,setColor]=useState('red'),[resetKey,setResetKey]=useState(0);
  const reduced=useMemo(()=>window.matchMedia?.('(prefers-reduced-motion: reduce)').matches??false,[]);
  const [useFallback,setUseFallback]=useState(reduced);
  useEffect(()=>{const media=window.matchMedia?.('(prefers-reduced-motion: reduce)');if(!media)return;const update=()=>setUseFallback(media.matches);media.addEventListener?.('change',update);return()=>media.removeEventListener?.('change',update)},[]);
  function activate(){setActive(true)} function changeColor(){setColor(current=>current==='red'?'amber':current==='amber'?'blue':'red')} function reset(){setActive(false);setColor('red');setResetKey(key=>key+1)}
  return <main><header><div className="eyebrow">CareAlert / emergency response</div><h1>3D Emergency Beacon</h1><p className="intro">A focused visual signal for a healthcare emergency-alert experience.</p></header><section className="experience" aria-labelledby="status-title"><div className="scene-wrap">{useFallback?<StaticBeacon color={color}/>:<Suspense fallback={<div className="loading-scene">Loading beacon…</div>}><BeaconScene key={resetKey} active={active} color={colors[color]}/></Suspense>}</div><div className="panel"><div className={`status ${active?'status-active':''}`}><span className="status-dot" aria-hidden="true"/><div><span className="status-label">Alert status</span><h2 id="status-title">{active?'Emergency alert active':'System ready'}</h2></div></div><p className="status-copy">{active?'Beacon pulse and rotation are signaling the care team.':'Activate the beacon to preview an emergency alert signal.'}</p><div className="controls"><button className="primary" onClick={activate}>{active?'Alert active':'Activate Alert'}</button><button onClick={changeColor}>Change Color <span className="color-name">({color})</span></button><button onClick={reset}>Reset View</button></div><p className="hint">Drag to orbit · Pinch or scroll to zoom</p></div></section><footer><p>Designed with simple geometry for a clear, responsible signal.</p></footer></main>
}
createRoot(document.getElementById('root')).render(<App/>);
