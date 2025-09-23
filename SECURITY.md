# Security Policy

## Reporting a Vulnerability

We greatly value the security community's efforts in helping keep our project safe. If you've discovered a security vulnerability, your responsible disclosure is crucial to us. Here's how you can report it:

1. **Contact Method**: Please send an email to [contact@nextify.ltd](mailto:contact@nextify.ltd).
2. **Email Subject**: Please use a concise yet descriptive subject, such as "Security Vulnerability Discovered".
3. **Vulnerability Details**: Provide a comprehensive description of the vulnerability. Include reproduction steps and any other information that might help us effectively understand and resolve the issue.
4. **Proof of Concept**: If possible, please attach any proof of concept or sample code. Please ensure that your research does not involve destructive testing or violate any laws.
5. **Response Time**: We will acknowledge receipt of your report within [e.g., 24 hours] and will keep you informed of our progress.
6. **Investigation and Remediation**: Our team will promptly investigate and work on resolving the issue. We will maintain communication with you throughout the process.
7. **Disclosure Policy**: Please refrain from public disclosure until we have mitigated the vulnerability. We will collaborate with you to determine an appropriate disclosure timeline based on the severity of the issue.

We appreciate your contributions to the security of our project. Contributors who help improve our security may be publicly acknowledged (with consent).

Note: Our security policy may be updated periodically.

## 环境变量管理

### 🔒 敏感文件保护

本项目已配置多层保护机制，防止敏感文件意外上传到GitHub：

#### 1. .gitignore 配置

以下文件类型已被自动忽略：
- `.env.local` - 本地环境变量
- `.env*.local` - 所有本地环境变量文件
- `.env.backup` - 环境变量备份文件
- `.env.local.backup` - 本地环境变量备份
- `*.backup` - 所有备份文件

#### 2. Git Hooks 保护

已设置 pre-commit hook，会在提交前自动检查：
- ✅ 阻止提交敏感文件
- ⚠️ 检测潜在的API密钥和秘钥
- 📝 提供清晰的错误提示和解决方案

#### 3. Git 历史清理

已从Git历史中完全移除所有 `.env.local` 文件，确保历史记录中不包含敏感信息。

### 📋 最佳实践

#### 环境变量文件命名规范

```
.env.example          # ✅ 示例文件，可以提交
.env.local           # ❌ 本地环境，不提交
.env.development     # ⚠️ 开发环境，谨慎处理
.env.production      # ❌ 生产环境，绝不提交
```

#### 安全检查清单

在处理环境变量时，请确认：

- [ ] 敏感信息只存储在 `.env.local` 文件中
- [ ] 已创建 `.env.example` 作为模板
- [ ] 生产环境密钥通过安全渠道管理
- [ ] 定期轮换API密钥和访问令牌
- [ ] 使用最小权限原则配置服务账户

### 🚨 应急响应

如果意外提交了敏感信息：

1. **立即行动**：
   ```bash
   # 从暂存区移除
   git reset HEAD <sensitive-file>
   
   # 从工作目录删除
   rm <sensitive-file>
   ```

2. **清理历史**（如果已推送）：
   ```bash
   # 使用 git filter-branch 清理历史
   git filter-branch --force --index-filter \
     'git rm --cached --ignore-unmatch <sensitive-file>' \
     --prune-empty --tag-name-filter cat -- --all
   
   # 强制推送（谨慎操作）
   git push origin --force --all
   ```

3. **轮换密钥**：
   - 立即更换所有暴露的API密钥
   - 通知团队成员
   - 检查访问日志