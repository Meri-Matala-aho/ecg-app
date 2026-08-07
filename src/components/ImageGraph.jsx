import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function ImageGraph({ data }) {
  const processingRef = useRef();

  const lineColor = '#7fe48c';
  const bgColor = '#202129'

  const canvasMaxWidth = 1280;
  const canvasMaxHeight = 412;

  const dividerImageFile = '/ecg-app/divider.png'

  let strokeWeight;

  let startPoint = {};
  let graph = {};

  let canvas;
  let canvasScaleRatio;

  // scrolling
  let prevMouseX = 0;
  let scrollAmount = -2;
  let isScrollEnabled = false;

  // divider animation
  let animProgress = 0; // keep 0 for builds
  let speed;

  let dividerStart;
  let dividerEnd;

  let graphImage;
  let dividerImage;

  const Sketch = p5i => {

    p5i.setup = async () => {

      if (!graphImage) graphImage = await p5i.loadImage(data.graph);
      if (!dividerImage) dividerImage = await p5i.loadImage(dividerImageFile);

      // canvas scaling calculations for different window sizes
      let canvasWidth = Math.min(p5i.windowWidth * 0.95, canvasMaxWidth);
      let canvasHeight = Math.min(p5i.windowWidth * 0.6, canvasMaxHeight);

      canvasScaleRatio = canvasHeight / canvasMaxHeight;

      strokeWeight = p5i.windowWidth > 700 ? 4 : 3;

      canvas = p5i.createCanvas(canvasWidth, canvasHeight);

      graph.w = canvasHeight / 1.5;
      graph.h = canvasHeight / 2;

      let heartRateRatio = data.heartRate != 0 ? 60 / data.heartRate : 1;
      graph.w *= heartRateRatio;

      startPoint = {
        x: (scrollAmount),
        y: canvasHeight / 2 - (graphImage.height * canvasScaleRatio) / 2
      };

      canvas.mouseOver(() => isScrollEnabled = true);
      canvas.mouseOut(() => isScrollEnabled = false);

      // divider animation
      dividerStart = -graph.w;
      let mult = Math.ceil(p5i.width / graph.w);

      dividerEnd = graph.w * mult;

      p5i.frameRate(60);
      speed = 0.4;
      animProgress = dividerStart;

      // initial draw to prevent flicker on resize
      p5i.draw();
    };


    p5i.draw = () => {
      p5i.background(bgColor);

      p5i.cursor('grab');
      if (p5i.mouseIsPressed) p5i.cursor('grabbing');

      if (graphImage) {
        p5i.image(graphImage, startPoint.x, startPoint.y, graphImage.width * canvasScaleRatio, graphImage.height * canvasScaleRatio);
      }
      

      drawDivider(p5i);

      p5i.rectMode(p5i.CENTER);
      p5i.textAlign(p5i.CENTER);
      p5i.textSize(18);
      p5i.fill(lineColor);
      
      let s = `HR: ${Math.floor(data.heartRate)}`;
      p5i.text(s, p5i.width / 2, p5i.height - 12, 200, 40);
    };


    p5i.mouseDragged = () => {
      if (!isScrollEnabled) return false;

      scrollAmount += p5i.mouseX - prevMouseX;
      prevMouseX += p5i.mouseX - prevMouseX;
      
      p5i.setup();

      // prevent default behavior
      return false;
    }

    p5i.touchMoved = () => {
      if (!isScrollEnabled) return false;

      scrollAmount += p5i.mouseX - prevMouseX;
      prevMouseX += p5i.mouseX - prevMouseX;
      
      p5i.setup();

      // prevent default behavior
      return false;
    }

    p5i.mousePressed = () => {
      prevMouseX = p5i.mouseX;
    }

    p5i.windowResized = () => {
      p5i.setup();
    };
  };


  const drawDivider = (p5i) => {

    animProgress += speed * p5i.deltaTime;
    if (animProgress > dividerEnd) animProgress = dividerStart;
    
    if (dividerImage) {
      p5i.image(dividerImage, animProgress, 0, dividerImage.width * canvasScaleRatio, dividerImage.height * canvasScaleRatio);
    }
  };


  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return () => newp5.remove();
  }, [])

  return <div ref={processingRef} />;
};

//export default Graph;