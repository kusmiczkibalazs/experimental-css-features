class Underline {
    static get inputProperties() {
        return ["--square-color", "--square-spacing"];
    }

    paint(ctx, geometry, properties) {
        let { width, height } = geometry;
        let spacing = properties.get("--square-spacing").value;

        if (spacing === 0) {
            return;
        }

        spacing = Math.abs(spacing);

        ctx.fillStyle = properties.get("--square-color");
        ctx.beginPath();
        for (let i = 0; i < width; i++) {
            ctx.fillRect(i * spacing * 2, height - 8, 8, 8);
        }
        ctx.fill();
    }
}

registerPaint("underline", Underline);
