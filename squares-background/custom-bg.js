class Squares {
    static get inputProperties() {
        return ["--square-color", "--square-size", "--square-spacing"];
    }

    paint(ctx, geometry, properties) {
        let { width, height } = geometry;
        let { value: size, unit: sizeUnit } = properties.get("--square-size");
        let { value: spacing, unit: spacingUnit } = properties.get("--square-spacing");

        if (size === 0 || spacing === 0) {
            return;
        }

        size = Math.abs(size);
        spacing = Math.abs(spacing);

        if (sizeUnit === "percent") {
            size = width * 0.01 * size;
        }

        if (spacingUnit === "percent") {
            spacing = width * 0.01 * spacing;
        }

        ctx.fillStyle = properties.get("--square-color");

        ctx.beginPath();
        for (let y = 0; y < height; y += spacing) {
            for (let x = 0; x < width; x += spacing) {
                ctx.moveTo(x + size, y + size);
                ctx.fillRect(x, y, size, size);
            }
        }
        ctx.fill();
    }
}

registerPaint("squares", Squares);
