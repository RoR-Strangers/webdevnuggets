module ApplicationHelper
  def require_admin
    current_user.nil? ? redirect_to(root_path) : (redirect_to(root_path) unless current_user.admin?)
  end

  class HTMLwithPygments < Redcarpet::Render::HTML
    def block_code(code, language)
      Pygments.highlight(code, lexer: language)
    end
  end
    
  def markdown(content)
    renderer = HTMLwithPygments.new(hard_wrap: true, filter_html: true,)
    options = {
      autolink: true,
      no_intra_emphasis: true,
      fenced_code_blocks: true,
      lax_spacing: true
    }
    return Redcarpet::Markdown.new(renderer, options).render(content).html_safe
  end
end
