module ApplicationHelper
  def require_admin
    current_user.nil? ? redirect_to(root_path) : (redirect_to(root_path) unless current_user.admin?)
  end
  
  def markdown(content)
    renderer = Redcarpet::Render::HTML.new(hard_wrap: true, filter_html: true,)
    options = {
      autolink: true,
      no_intra_emphasis: true,
      fenced_code_blocks: true,
      lax_spacing: true
    }
    return Redcarpet::Markdown.new(renderer, options).render(content).html_safe
  end
end
