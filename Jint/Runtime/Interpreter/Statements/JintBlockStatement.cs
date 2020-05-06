using Esprima.Ast;
using System.Threading.Tasks;

namespace Jint.Runtime.Interpreter.Statements
{
    internal sealed class JintBlockStatement : JintStatement<Statement>
    {
        private readonly JintStatementList _statementList;

        public JintBlockStatement(Engine engine, JintStatementList statementList) : base(engine, null)
        {
            _statementList = statementList;
        }

        protected override Completion ExecuteInternal()
        {
            return _statementList.Execute();
        }

        protected override Task<Completion> ExecuteInternalAsync()
        {
            return _statementList.ExecuteAsync();
        }
    }
}