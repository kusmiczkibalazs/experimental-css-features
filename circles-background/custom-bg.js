class Circles {
    static get inputProperties() {
        return ["--circle-color", "--circle-size"];
    }

    paint(ctx, geometry, properties) {
        let { width, height } = geometry;
        let { value: size, unit: sizeUnit } = properties.get("--circle-size");

        console.log(properties.get("--circle-size"));

        if (size === 0) {
            return;
        }

        size = Math.abs(size);

        if (sizeUnit === "percent") {
            size = width * 0.01 * size;
        }

        ctx.fillStyle = properties.get("--circle-color");

        ctx.beginPath();
        for (let y = 0; y < height + size; y += 130) {
            for (let x = 0; x < width + size; x += 130) {
                ctx.moveTo(x, y);
                ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            }
        }
        ctx.fill();
    }
}

registerPaint("circles", Circles);
