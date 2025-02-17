import "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/home/bacherik/Documents/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
