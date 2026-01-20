const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool(false);
    }
    config.module.rules.delete('images');

    // Hinzufügen der neuen Asset Module Konfiguration
    // Neue Asset Module Konfiguration hinzufügen
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/)
      .type('asset')
      .parser({
        dataUrlCondition: {
          maxSize: 1096 // 4 KiB, unter diesem Limit werden Bilder inline als Base64 kodiert
        }
      });

    // Generator-Konfiguration direkt im Rule-Block
    config.module
      .rule('images')
      .set('generator', {
        filename: 'img/[name].[hash:8][ext][query]' // Konfiguration der Ausgabedateinamen
      });

  },
  devServer: {
    allowedHosts: 'all'
    // Für spezifische Domains können Sie es wie folgt einstellen:
    // allowedHosts: ['yourdomain.com', 'sub.yourdomain.com']
  }
});