<template>
  <div class="w-full max-w-4xl mt-32 mx-auto">
    <!-- Editor Toolbar -->
    <div class="flex flex-wrap gap-1 p-2 bg-gray-100 rounded-t-lg border border-gray-300">
      <!-- Text Formatting -->
      <button @click="execCommand('bold')" type="button" class="p-2 rounded hover:bg-gray-200" title="Bold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>
      <button @click="execCommand('italic')" type="button" class="p-2 rounded hover:bg-gray-200" title="Italic">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <button @click="execCommand('underline')" type="button" class="p-2 rounded hover:bg-gray-200" title="Underline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      <!-- Text Alignment -->
      <div class="border-l border-gray-400 h-6 my-1"></div>
      <button @click="setAlignment('left')" type="button" class="p-2 rounded hover:bg-gray-200" title="Align Left">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button @click="setAlignment('center')" type="button" class="p-2 rounded hover:bg-gray-200" title="Center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button @click="setAlignment('right')" type="button" class="p-2 rounded hover:bg-gray-200" title="Align Right">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <!-- Lists -->
      <div class="border-l border-gray-400 h-6 my-1"></div>
      <button @click="execCommand('insertUnorderedList')" type="button" class="p-2 rounded hover:bg-gray-200" title="Bullet List">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button @click="execCommand('insertOrderedList')" type="button" class="p-2 rounded hover:bg-gray-200" title="Numbered List">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Links -->
      <div class="border-l border-gray-400 h-6 my-1"></div>
      <button @click="insertLink" type="button" class="p-2 rounded hover:bg-gray-200" title="Insert Link">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
      
      <!-- Headings -->
      <select @change="formatHeading" class="p-1 text-sm rounded border border-gray-300 bg-white">
        <option value="p">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
      </select>
    </div>
    
    <!-- Editable Content Area -->
    <div
      ref="editor"
      class="min-h-[200px] p-4 border border-t-0 border-gray-300 rounded-b-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      contenteditable="true"
      @input="updateContent"
      @paste="handlePaste"
    ></div>
    
    <!-- Output Options -->
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- HTML Output -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">HTML Output:</label>
        <textarea
          class="w-full h-48 p-2 border border-gray-300 rounded-md font-mono text-sm"
          readonly
          :value="htmlOutput"
        ></textarea>
      </div>
      
      <!-- Tailwind-Compatible Output -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tailwind-Compatible Output:</label>
        <textarea
          class="w-full h-48 p-2 border border-gray-300 rounded-md font-mono text-sm"
          readonly
          :value="tailwindOutput"
        ></textarea>
      </div>
    </div>
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tailwind-Compatible render:</label>
        <div
          class="w-full h-48 p-2 border border-gray-300 rounded-md font-mono text-sm"
          v-html="tailwindOutput"
        ></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: '',
      htmlOutput: '',
      tailwindOutput: '',
      showLinkDialog: false
    }
  },
  methods: {
    execCommand(command, value = null) {
      document.execCommand(command, false, value)
      this.updateContent()
    },
    
    setAlignment(align) {
      this.execCommand('justify' + align.charAt(0).toUpperCase() + align.slice(1))
    },
    
    formatHeading(e) {
      const heading = e.target.value
      this.execCommand('formatBlock', `<${heading}>`)
    },
    
    insertLink() {
      const url = prompt('Enter the URL:')
      if (url) {
        this.execCommand('createLink', url)
      }
    },
    
    updateContent() {
      this.htmlContent = this.$refs.editor.innerHTML
      this.generateOutputs()
      this.$emit('update:modelValue', this.htmlContent)
    },
    
    handlePaste(e) {
      e.preventDefault()
      const text = (e.clipboardData || window.clipboardData).getData('text/plain')
      document.execCommand('insertText', false, text)
      this.updateContent()
    },
    
    generateOutputs() {
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = this.htmlContent
      
      // Process the HTML to make it Tailwind-compatible
      this.processForTailwind(tempDiv)
      
      // Generate outputs
      this.htmlOutput = tempDiv.innerHTML
      this.tailwindOutput = this.generateTailwindMarkup(tempDiv)
    },
    
    processForTailwind(element) {
      // Convert inline styles to Tailwind classes where possible
      Array.from(element.children).forEach(child => {
        // Process headings
        if (['H1', 'H2', 'H3'].includes(child.tagName)) {
          const sizeMap = {
            'H1': 'text-4xl font-bold mb-4',
            'H2': 'text-3xl font-bold mb-3',
            'H3': 'text-2xl font-bold mb-2'
          }
          child.className = sizeMap[child.tagName]
        }
        
        // Process paragraphs
        if (child.tagName === 'P') {
          child.className = 'mb-4'
        }
        
        // Process lists
        if (child.tagName === 'UL') {
          child.className = 'list-disc pl-6 mb-4'
        }
        if (child.tagName === 'OL') {
          child.className = 'list-decimal pl-6 mb-4'
        }
        
        // Process links
        if (child.tagName === 'A') {
          child.className = 'text-blue-600 hover:text-blue-800 underline'
        }
        
        // Process bold/italic/underline
        if (child.tagName === 'STRONG' || child.tagName === 'B') {
          child.className = 'font-bold'
        }
        if (child.tagName === 'EM' || child.tagName === 'I') {
          child.className = 'italic'
        }
        if (child.tagName === 'U') {
          child.className = 'underline'
        }
        
        // Process text alignment
        const textAlign = child.style.textAlign
        if (textAlign) {
          child.className += ` text-${textAlign}`
          child.style.textAlign = ''
        }
        
        // Recursively process children
        if (child.children.length > 0) {
          this.processForTailwind(child)
        }
      })
    },
    
    generateTailwindMarkup(element) {
      // Convert the processed HTML to Tailwind-compatible markup
      let markup = element.innerHTML
      
      // Replace common inline styles with Tailwind classes
      markup = markup.replace(/style="[^"]*font-weight:\s*bold[^"]*"/g, 'class="font-bold"')
      markup = markup.replace(/style="[^"]*font-style:\s*italic[^"]*"/g, 'class="italic"')
      markup = markup.replace(/style="[^"]*text-decoration:\s*underline[^"]*"/g, 'class="underline"')
      markup = markup.replace(/style="[^"]*text-align:\s*left[^"]*"/g, 'class="text-left"')
      markup = markup.replace(/style="[^"]*text-align:\s*center[^"]*"/g, 'class="text-center"')
      markup = markup.replace(/style="[^"]*text-align:\s*right[^"]*"/g, 'class="text-right"')
      
      // Clean up empty style attributes
      markup = markup.replace(/style=""/g, '')
      
      return markup
    },
    
    setContent(html) {
      this.$refs.editor.innerHTML = html
      this.htmlContent = html
      this.generateOutputs()
    }
  },
  mounted() {
    // Focus the editor on mount
    this.$refs.editor.focus()
    
    // Initialize with empty content to generate outputs
    this.generateOutputs()
  }
}
</script>

<style>
/* Basic editor styles */
[contenteditable="true"] {
  line-height: 1.5;
}

[contenteditable="true"]:focus {
  outline: none;
}
</style>